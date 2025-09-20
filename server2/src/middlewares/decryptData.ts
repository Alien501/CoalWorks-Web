import { NextFunction, Request, Response } from "express";

const CryptoJS = require('crypto-js');

const SECRET_KEY = process.env.SECRET;

const decryptMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  if(req.method == 'GET'){
    next();
    return;
  };
  console.log(req.body)
  try{
    if (req.body && req.body.encryptedData) {
    try {
      const bytes = CryptoJS.AES.decrypt(req.body.encryptedData, SECRET_KEY);
      const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      req.body = decryptedData;
      console.log(decryptedData)
    } catch (error) {
      console.log(error)
      return res.status(400).json({ error: 'Decryption failed' });
    }
  }
  console.log("cress")
  next();
  }
  catch(error){
    console.log(error)
  }
};

export {
    decryptMiddleware
}