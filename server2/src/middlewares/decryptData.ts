import { NextFunction, Request, Response } from "express";

const CryptoJS = require('crypto-js');

const SECRET_KEY = process.env.SECRET;

const decryptMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  console.log("Decrypt middleware - Original body:", req.body);
  console.log("SECRET_KEY exists:", !!SECRET_KEY);
  
  if (req.body && (req.body.encrypted || req.body.encryptedData)) {
    try {
      const encryptedValue = req.body.encrypted || req.body.encryptedData;
      console.log("Encrypted value:", encryptedValue);
      
      const bytes = CryptoJS.AES.decrypt(encryptedValue, SECRET_KEY);
      const decryptedString = bytes.toString(CryptoJS.enc.Utf8);
      console.log("Decrypted string:", decryptedString);
      
      const decryptedData = JSON.parse(decryptedString);
      
      req.body = decryptedData;
      console.log("Decrypted data:", decryptedData);
    } catch (error) {
      console.error('Decryption error:', error);
      return res.status(400).json({ error: 'Decryption failed' });
    }
  }
  console.log("cress")
  next();
};

export {
    decryptMiddleware
}