import swaggerJsdoc from 'swagger-jsdoc';

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: "CoalWorks API Documentation",
            version: "1.0.0",
            description: "Documentation for CoalWorks API's"
        },
        server: [
            {
                url: "http://localhost:3000",
                description: "Development server"
            }
        ]
    },
    apis: ['./src/router/*.ts']
}

const swaggerDocs = swaggerJsdoc(swaggerOptions);
export {
    swaggerDocs
}