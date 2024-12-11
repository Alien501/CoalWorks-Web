// @ts-nocheck

import { Router, Request, Response, NextFunction } from 'express';
import { asyncHandler } from '../middleware/asyncHandler';
import MailService from '../mailService';
import { z } from 'zod';

const router = Router();

const mailSchema = z.object({
  recipients: z.array(z.string().email()),
  subject: z.string().min(1, "Subject is required"),
  body: z.string().min(1, "Body is required"),
  scheduledFor: z.string().optional(),
  priority: z.enum(['LOW', 'MEDIUM', 'HIGH']).optional(),
  attachments: z.array(z.object({
    filename: z.string(),
    content: z.string().or(z.instanceof(Buffer)),
    contentType: z.string().optional()
  })).optional()
});

// Send immediate mail
router.post('/send', asyncHandler(async (req: Request, res: Response) => {
  const validatedData = mailSchema.parse(req.body);
  console.log("reaches here")
  
  const result = await MailService.sendImmediateMail({
    recipients: validatedData.recipients,
    subject: validatedData.subject,
    body: validatedData.body,
    attachments: validatedData.attachments,
    priority: validatedData.priority
  });

  console.error(result)
  if(!result) {
    res.status(500).json("Something went wrong");
  }

  res.status(200).json({
    message: 'Mail task created and processed',
    taskId: result[0].mailTaskId
  });
}));

// Schedule mail
router.post('/schedule', asyncHandler(async (req: Request, res: Response) => {
  const validatedData = mailSchema.parse(req.body);
  
  if (!validatedData.scheduledFor) {
    return res.status(400).json({ error: 'Scheduled time is required for scheduling' });
  }

  const task = await MailService.createMailTask({
    recipients: validatedData.recipients,
    subject: validatedData.subject,
    body: validatedData.body,
    scheduledFor: validatedData.scheduledFor,
    attachments: validatedData.attachments,
    priority: validatedData.priority
  });

  await MailService.scheduleMail(task.id);

  res.status(200).json({
    message: 'Mail task scheduled successfully',
    taskId: task.id
  });
}));

// Get mail task status
router.get('/status/:taskId', asyncHandler(async (req: Request, res: Response) => {
  const taskId = req.params.taskId;
  const status = await MailService.getMailTaskStatus(taskId);

  if (!status) {
    return res.status(404).json({ error: 'Mail task not found' });
  }

  res.status(200).json(status);
}));

export default router;