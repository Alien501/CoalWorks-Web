import { Router, Request, Response } from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { asyncHandler } from '../utils/asyncHandler';

const router = Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req: any, file: any, cb: any) => {
        const uploadDir = path.join(process.cwd(), 'uploads/dem');
        
        // Create directory if it doesn't exist
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }
        
        cb(null, uploadDir);
    },
    filename: (req: any, file: any, cb: any) => {
        // Generate unique filename with timestamp
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname);
        const name = path.basename(file.originalname, ext);
        cb(null, `${name}-${uniqueSuffix}${ext}`);
    }
});

// File filter to accept only TIF files
const fileFilter = (req: any, file: any, cb: any) => {
    const allowedTypes = [
        'image/tiff',
        'image/tif'
    ];

    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type. Only TIF files are allowed.'));
    }
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 50 * 1024 * 1024 // 50MB limit for TIF files
    }
});

/**
 * @swagger
 * /api/v1/dem/upload:
 *   post:
 *     summary: Upload DEM files
 *     description: Upload files for DEM processing and analysis
 *     tags: [DEM]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *                 description: File to upload (PDF, Excel, CSV, Images)
 *     responses:
 *       200:
 *         description: File uploaded successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 error:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     filename:
 *                       type: string
 *                     originalName:
 *                       type: string
 *                     size:
 *                       type: number
 *                     mimetype:
 *                       type: string
 *                     uploadPath:
 *                       type: string
 *       400:
 *         description: Bad request - Invalid file type or size
 *       500:
 *         description: Internal server error
 */
router.post('/upload', upload.single('file'), asyncHandler(async (req: Request, res: Response) => {
    try {
        if (!req.file) {
            res.status(400).json({
                message: 'No file uploaded',
                error: 'FILE_REQUIRED',
                data: null
            });
            return;
        }

        const fileInfo = {
            filename: req.file.filename,
            originalName: req.file.originalname,
            size: req.file.size,
            mimetype: req.file.mimetype,
            uploadPath: req.file.path
        };

        // Here you can add additional processing logic
        // For example: file validation, database storage, etc.
        
        console.log('File uploaded successfully:', fileInfo);

        res.status(200).json({
            message: 'File uploaded successfully',
            error: null,
            data: fileInfo
        });

    } catch (error) {
        console.error('Upload error:', error);
        res.status(500).json({
            message: 'Upload failed',
            error: error instanceof Error ? error.message : 'Unknown error',
            data: null
        });
    }
}));

/**
 * @swagger
 * /api/v1/dem/process:
 *   post:
 *     summary: Process DEM file with external API
 *     description: Upload TIF file and process it with sensor and environmental data using external API
 *     tags: [DEM]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *                 description: TIF file to process
 *               sensor_data:
 *                 type: string
 *                 description: Sensor readings summary
 *               environmental_data:
 *                 type: string
 *                 description: Environmental data details
 *     responses:
 *       200:
 *         description: File processed successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 report:
 *                   type: object
 *                 risk_map_url:
 *                   type: string
 *                 analysis_output_dir:
 *                   type: string
 *                 message:
 *                   type: string
 *       400:
 *         description: Bad request - Missing required fields
 *       500:
 *         description: Internal server error
 */
router.post('/process', upload.single('file'), asyncHandler(async (req: Request, res: Response) => {
    try {
        if (!req.file) {
            res.status(400).json({
                message: 'No file uploaded',
                error: 'FILE_REQUIRED',
                data: null
            });
            return;
        }

        const { sensor_data, environmental_data } = req.body;

        if (!sensor_data || !environmental_data) {
            res.status(400).json({
                message: 'Missing required fields: sensor_data and environmental_data',
                error: 'MISSING_FIELDS',
                data: null
            });
            return;
        }

        // Log the data being sent for debugging
        console.log('Sending data to external API:');
        console.log('File:', req.file.originalname, 'Size:', req.file.size, 'Type:', req.file.mimetype);
        console.log('Sensor data:', sensor_data);
        console.log('Environmental data:', environmental_data);
        
        // Try using axios with FormData directly (Node.js built-in FormData)
        const axios = require('axios');
        const FormData = require('form-data');
        const fs = require('fs');
        
        const formData = new FormData();
        const fileStream = fs.createReadStream(req.file.path);
        
        // Append file with proper options
        formData.append('file', fileStream, {
            filename: req.file.originalname,
            contentType: req.file.mimetype
        });
        
        // Append text fields
        formData.append('sensor_data', sensor_data);
        formData.append('environmental_data', environmental_data);

        const externalApiUrl = 'http://192.168.137.240:8000/generate_report';
        
        console.log('Making request to:', externalApiUrl);
        console.log('Form data headers:', formData.getHeaders());
        
        const response = await axios.post(externalApiUrl, formData, {
            headers: {
                ...formData.getHeaders(),
            },
            timeout: 300000, // 5 minutes timeout
            maxContentLength: Infinity,
            maxBodyLength: Infinity
        });

        // Clean up uploaded file
        fs.unlinkSync(req.file.path);

        // Return the response from external API
        res.status(200).json(response.data);

    } catch (error: any) {
        console.error('Processing error:', error);
        
        // Log detailed error response if available
        if (error.response) {
            console.error('API Error Response:', error.response.data);
            console.error('API Error Status:', error.response.status);
            console.error('API Error Headers:', error.response.headers);
        }
        
        // Clean up uploaded file if it exists
        if (req.file && req.file.path) {
            try {
                const fs = require('fs');
                fs.unlinkSync(req.file.path);
            } catch (cleanupError) {
                console.error('Error cleaning up file:', cleanupError);
            }
        }

        // Return more detailed error information
        const errorMessage = error.response?.data?.detail 
            ? `API Error: ${JSON.stringify(error.response.data.detail)}`
            : error instanceof Error ? error.message : 'Unknown error';

        res.status(500).json({
            message: 'Processing failed',
            error: errorMessage,
            data: error.response?.data || null
        });
    }
}));

/**
 * @swagger
 * /api/v1/dem/test-api:
 *   post:
 *     summary: Test external API connection
 *     description: Test connection to external API with sample data
 *     tags: [DEM]
 *     responses:
 *       200:
 *         description: API test successful
 *       500:
 *         description: API test failed
 */
router.post('/test-api', asyncHandler(async (req: Request, res: Response) => {
    try {
        const axios = require('axios');
        const externalApiUrl = 'http://192.168.137.240:8000/docs';
        
        console.log('Testing connection to external API...');
        
        // Try to access the API docs first
        const docsResponse = await axios.get(externalApiUrl, {
            timeout: 10000,
        });
        
        console.log('API docs accessible, status:', docsResponse.status);
        
        res.status(200).json({
            message: 'External API is accessible',
            docsStatus: docsResponse.status,
            data: 'API connection successful'
        });

    } catch (error: any) {
        console.error('API test error:', error);
        
        res.status(500).json({
            message: 'API test failed',
            error: error instanceof Error ? error.message : 'Unknown error',
            data: null
        });
    }
}));

/**
 * @swagger
 * /api/v1/dem/files:
 *   get:
 *     summary: Get uploaded DEM files
 *     description: Retrieve list of uploaded DEM files
 *     tags: [DEM]
 *     responses:
 *       200:
 *         description: Files retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 error:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       filename:
 *                         type: string
 *                       originalName:
 *                         type: string
 *                       size:
 *                         type: number
 *                       uploadDate:
 *                         type: string
 *       500:
 *         description: Internal server error
 */
router.get('/files', asyncHandler(async (req: Request, res: Response) => {
    try {
        const uploadDir = path.join(process.cwd(), 'uploads/dem');
        
        if (!fs.existsSync(uploadDir)) {
            res.status(200).json({
                message: 'No files found',
                error: null,
                data: []
            });
            return;
        }

        const files = fs.readdirSync(uploadDir);
        const fileList = files.map(filename => {
            const filePath = path.join(uploadDir, filename);
            const stats = fs.statSync(filePath);
            
            return {
                filename,
                originalName: filename, // In a real app, you'd store this in a database
                size: stats.size,
                uploadDate: stats.birthtime.toISOString()
            };
        });

        res.status(200).json({
            message: 'Files retrieved successfully',
            error: null,
            data: fileList
        });

    } catch (error) {
        console.error('Error retrieving files:', error);
        res.status(500).json({
            message: 'Failed to retrieve files',
            error: error instanceof Error ? error.message : 'Unknown error',
            data: null
        });
    }
}));

/**
 * @swagger
 * /api/v1/dem/files/{filename}:
 *   delete:
 *     summary: Delete a DEM file
 *     description: Delete a specific uploaded DEM file
 *     tags: [DEM]
 *     parameters:
 *       - in: path
 *         name: filename
 *         required: true
 *         schema:
 *           type: string
 *         description: Name of the file to delete
 *     responses:
 *       200:
 *         description: File deleted successfully
 *       404:
 *         description: File not found
 *       500:
 *         description: Internal server error
 */
router.delete('/files/:filename', asyncHandler(async (req: Request, res: Response) => {
    try {
        const { filename } = req.params;
        const filePath = path.join(process.cwd(), 'uploads/dem', filename);

        if (!fs.existsSync(filePath)) {
            res.status(404).json({
                message: 'File not found',
                error: 'FILE_NOT_FOUND',
                data: null
            });
            return;
        }

        fs.unlinkSync(filePath);

        res.status(200).json({
            message: 'File deleted successfully',
            error: null,
            data: { filename }
        });

    } catch (error) {
        console.error('Error deleting file:', error);
        res.status(500).json({
            message: 'Failed to delete file',
            error: error instanceof Error ? error.message : 'Unknown error',
            data: null
        });
    }
}));

export { router as demRouter };
