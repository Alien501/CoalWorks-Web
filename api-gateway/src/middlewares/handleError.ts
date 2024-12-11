// import { NextFunction, Request, Response, ErrorRequestHandler } from "express";

// const handleError: ErrorRequestHandler = (err, req, res, next) => {
//     console.error(err.message);
//     res.status(500).send({
//         message: 'Internal server error!',
//         error: err.message,
//         data: null
//     })
// }

// export {
//     handleError
// }

import { NextFunction, Request, Response, ErrorRequestHandler } from "express";

const handleError: ErrorRequestHandler = (err, req, res, next) => {
    console.error(err.message);
    res.status(500).send({
        message: 'Internal server error!',
        error: err.message,
        data: null
    })
}

export {
    handleError
}