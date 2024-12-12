import { Request, Response, NextFunction } from 'express'
import multer from "multer";
import path from 'path'
import fs from 'fs/promises'
import { prisma } from '../../utils/prisma';

// Configure multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, '../uploads/dgms')
    // Ensure upload directory exists
    fs.mkdir(uploadPath, { recursive: true })
      .then(() => cb(null, uploadPath))
      .catch((err) => cb(err, uploadPath))
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
  }
})

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 50 * 1024 * 1024 }, // 50MB file size limit
  fileFilter: (req, file, cb) => {
    const allowedFileTypes = /dgms|txt|pdf|docx?/i
    const extname = allowedFileTypes.test(path.extname(file.originalname).toLowerCase())
    const mimetype = allowedFileTypes.test(file.mimetype)

    if (extname && mimetype) {
      return cb(null, true)
    } else {
      cb(new Error('Invalid file type. Only DGMS, TXT, PDF, and DOCX files are allowed.'))
    }
  }
})

export const createDgmsFile = [
    upload.single('file'),
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        if (!req.file) {
          return res.status(400).json({ error: 'No file uploaded' });
        }
  
        const { originalname, filename, path: filePath } = req.file;
  
        const dgmsFile = await prisma.dgmsFiles.create({
          data: {
            name: originalname,
            path: filePath,
          },
        });
  
        res.status(201).json({
          message: 'File uploaded successfully',
          file: dgmsFile,
        });
      } catch (error) {
        next(error);
      }
    },
  ];
  

// GET: Retrieve all DGMS files
export const getAllDgmsFiles = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const files = await prisma.dgmsFiles.findMany()
    res.json(files)
  } catch (error) {
    next(error)
  }
}

// GET: Retrieve a specific DGMS file by ID
export const getDgmsFileById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const file = await prisma.dgmsFiles.findUnique({
      where: { id: parseInt(id) }
    })

    if (!file) {
      return res.status(404).json({ error: 'File not found' })
    }

    res.json(file)
  } catch (error) {
    next(error)
  }
}

// Serve static files
export const serveDgmsFile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const file = await prisma.dgmsFiles.findUnique({
      where: { id: parseInt(id) }
    })

    if (!file) {
      return res.status(404).json({ error: 'File not found' })
    }

    res.download(file.path, file.name, (err) => {
      if (err) {
        // Handle download error
        res.status(500).json({ error: 'Could not download file' })
      }
    })
  } catch (error) {
    next(error)
  }
}