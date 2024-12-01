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