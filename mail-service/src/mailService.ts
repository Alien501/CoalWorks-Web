import nodemailer from 'nodemailer';
import { prisma } from '../../server2//src/utils/prisma'
import { createTransport } from 'nodemailer';
import schedule from 'node-schedule';
import { config } from 'dotenv';

config();

interface MailOptions {
  recipients: string[];
  subject: string;
  body: string;
  attachments?: any[];
  scheduledFor?: Date;
  priority?: 'LOW' | 'MEDIUM' | 'HIGH';
}

class MailService {
  private transporter: nodemailer.Transporter;
  constructor() {
      console.log(process.env.SMTP_HOST)
      console.log(process.env.SMTP_PORT)
      console.log(process.env.SMTP_USER)
      console.log(process.env.SMTP_PASS)
      this.transporter = createTransport({
        // @ts-ignore
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      },
      tls: {
        rejectUnauthorized: true,
        // ciphers:'SSLv3'
    }
    });
  }

  async createMailTask(options: MailOptions) {
    return prisma.mailTask.create({
      data: {
        recipients: options.recipients,
        subject: options.subject,
        body: options.body,
        attachments: options.attachments ? JSON.stringify(options.attachments) : undefined,
        scheduledFor: options.scheduledFor,
        priority: options.priority || 'MEDIUM'
      }
    });
  }

  async processMailTask(taskId: string) {
    const task = await prisma.mailTask.findUnique({
      where: { id: taskId }
    });

    if (!task) {
      throw new Error('Mail task not found');
    }

    try {
      await prisma.mailTask.update({
        where: { id: taskId },
        data: { status: 'PROCESSING' }
      });
      const mailLogs = await Promise.all(
        task.recipients.map(async (recipient) => {
          try {
            const info = await this.transporter.sendMail({
              from: process.env.SMTP_SENDER,
              to: recipient,
              subject: task.subject,
              html: task.body,
              attachments: task.attachments ? JSON.parse(task.attachments as string) : undefined
            });
            return prisma.mailLog.create({
              data: {
                mailTaskId: taskId,
                recipient,
                status: 'SENT',
                sentAt: new Date()
              }
            });
          } catch (error) {
            return prisma.mailLog.create({
              data: {
                mailTaskId: taskId,
                recipient,
                status: 'FAILED',
                errorMessage: error instanceof Error ? error.message : 'Unknown error'
              }
            });
          }
        })
      );

      await prisma.mailTask.update({
        where: { id: taskId },
        data: { status: 'SENT' }
      });

      return mailLogs;
    } catch (error) {
      await prisma.mailTask.update({
        where: { id: taskId },
        data: { status: 'FAILED' }
      });

      throw error;
    }
  }

  async scheduleMail(taskId: string) {
    const task = await prisma.mailTask.findUnique({
      where: { id: taskId }
    });

    if (!task || !task.scheduledFor) {
      throw new Error('Scheduled task not found or no scheduled time');
    }

    schedule.scheduleJob(task.scheduledFor, async () => {
      try {
        await this.processMailTask(taskId);
      } catch (error) {
        console.error(`Failed to process scheduled mail task ${taskId}:`, error);
      }
    });
  }

  async sendImmediateMail(options: MailOptions) {
    const task = await this.createMailTask({
      ...options,
      scheduledFor: new Date()
    });

    return this.processMailTask(task.id);
  }

  async getMailTaskStatus(taskId: string) {
    return prisma.mailTask.findUnique({
      where: { id: taskId },
      include: {
        mailLogs: true
      }
    });
  }
}

export default new MailService();