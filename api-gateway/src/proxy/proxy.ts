// // @ts-nocheck

// import { Request, Response, NextFunction } from "express";
// import { IncomingMessage, ServerResponse, ClientRequest } from "http";
// import { createProxyMiddleware, Options } from "http-proxy-middleware";
// import crypto from 'crypto';

// const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY || 'defaultencryptionkey'; // 32 characters
// const IV_LENGTH = 16; // AES IV length

// // Encryption function
// const encryptData = (data: string): string => {
//     const iv = crypto.randomBytes(IV_LENGTH);
//     const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), iv);
//     let encrypted = cipher.update(data);
//     encrypted = Buffer.concat([encrypted, cipher.final()]);
//     return iv.toString('hex') + ':' + encrypted.toString('hex');
// };

// // Decryption function
// const decryptData = (data: string): string => {
//     const [ivHex, encryptedData] = data.split(':');
//     const iv = Buffer.from(ivHex, 'hex');
//     const encryptedText = Buffer.from(encryptedData, 'hex');
//     const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), iv);
//     let decrypted = decipher.update(encryptedText);
//     decrypted = Buffer.concat([decrypted, decipher.final()]);
//     return decrypted.toString();
// };

// // Modify the request body to encrypt data
// const setRequestBodyData = (proxyReq: ClientRequest, req: Request, res: Response) => {
//     if (req.body && Object.keys(req.body).length > 0) {
//         const bodyData = encryptData(JSON.stringify(req.body));
//         proxyReq.setHeader('Content-Type', 'application/json');
//         proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
//         proxyReq.write(bodyData);
//     }
// };

// // Modify the response body to decrypt data
// const responseHandle = (
//     proxyRes: IncomingMessage, 
//     req: IncomingMessage, 
//     res: ServerResponse
// ) => {
//     let body = '';
//     proxyRes.on('data', (chunk) => {
//         body += chunk;
//     });

//     proxyRes.on('end', () => {
//         try {
//             const decryptedBody = decryptData(body);
//             res.setHeader('Content-Type', 'application/json');
//             res.setHeader('Access-Control-Allow-Origin', '*');
//             res.end(decryptedBody);
//         } catch (err) {
//             console.error('Decryption Error:', err);
//             res.statusCode = 500;
//             res.end('Decryption Error');
//         }
//     });
// };

// const proxyError = (
//     err: Error, 
//     req: IncomingMessage, 
//     res: ServerResponse, 
//     next: NextFunction
// ) => {
//     console.error('Proxy Error:', err);
//     if (!res.headersSent) {
//         res.statusCode = 500;
//         res.end('Proxy Error');
//     }
// };

// const serverProxy = createProxyMiddleware({
//     target: process.env.SERVER_URL,
//     changeOrigin: true,
//     pathRewrite: {
//         '^/data': ''
//     },
//     on: {
//         proxyReq: setRequestBodyData,
//         proxyRes: responseHandle,
//         error: proxyError
//     }
// });

// export {
//     serverProxy
// };


// @ts-nocheck

import { Request, Response, NextFunction } from "express";
import { IncomingMessage, ServerResponse, ClientRequest } from "http";
import { createProxyMiddleware, Options } from "http-proxy-middleware";

const setRequestBodyData = (proxyReq: ClientRequest, req: Request, res: Response) => {
    if (req.body && Object.keys(req.body).length > 0) {
        const bodyData = JSON.stringify(req.body);
        proxyReq.setHeader('Content-Type', 'application/json');
        proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
        proxyReq.write(bodyData);
    }
}

const responseHandle = (
    proxyRes: IncomingMessage, 
    req: IncomingMessage, 
    res: ServerResponse<IncomingMessage>
) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
}

const proxyError = (
    err: Error, 
    req: IncomingMessage, 
    res: ServerResponse<IncomingMessage>, 
    next: NextFunction
) => {
    console.error('Proxy Error:', err);
    if (!res.headersSent) {
        res.statusCode = 500;
        res.end('Proxy Error');
    }
}

const serverProxy = createProxyMiddleware({
    target: process.env.SERVER_URL,
    changeOrigin: true,
    pathRewrite: {
        '^/data': ''
    },
    on: {
        proxyReq: setRequestBodyData,
        proxyRes: responseHandle,
        error: proxyError
    }
})

export {
    serverProxy
}