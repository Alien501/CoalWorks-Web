/**
 * Body format
 * {
 *      to: [list of emails],
 *      subject: Subject of this message,
 *      body: HTML Content,
 *
 * }
 */

import { Response, Request } from "express";
import { transporter } from "../config/config";

const sendBulkMail = async (req: Request, res: Response) => {
    const { to, subject, body } = req.body;
    let toString = '';
    for (let index = 0; index < to.length; index++) {
        toString += to[index] +','
    }
    transporter.sendMail({
        from: 'porrikigamer501@gmail.com',
        to: toString,
        subject: subject,
        html: body
    })
}

export {
    sendBulkMail
}