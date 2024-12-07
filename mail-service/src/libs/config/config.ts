import nodemailer from 'nodemailer';

// @ts-ignore
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "porrikigamer501@gmail.com",
        pass: "ugel ooxz mkoe dniy",
    },
    tls: {
        ciphers:'SSLv3'
    }
})

export {
    transporter
}