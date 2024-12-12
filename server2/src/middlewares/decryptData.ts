import { NextFunction, Request, Response } from "express";

const CryptoJS = require('crypto-js');

const SECRET_KEY = process.env.SECRET;

const decryptMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  if (req.body && req.body.encrypted) {
    try {
      const bytes = CryptoJS.AES.decrypt(req.body.encrypted, SECRET_KEY);
      const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      
      req.body = decryptedData;
    } catch (error) {
      return res.status(400).json({ error: 'Decryption failed' });
    }
  }
  next();
};

export {
    decryptMiddleware
}