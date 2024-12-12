const express = require('express');
const http = require('http');
const { Server } = require("socket.io");

class SocketIOServer {
    constructor(port = 8888) {
        this.app = express();

        this.server = http.createServer(this.app);

        this.io = new Server(this.server, {
            cors: {
                origin: "*", 
                methods: ["GET", "POST"]
            }
        });

        // Store connected clients
        this.clients = new Set();

        // Set up connection handling
        this.setupSocketEvents();

        // Store the port
        this.port = port;
    }

    setupSocketEvents() {
        this.io.on('connection', (socket) => {
            this.clients.add(socket.id);
            console.log(`New client connected: ${socket.id}`);
            console.log(`Total connected clients: ${this.clients.size}`);

            socket.on('message', (data) => {
                console.log(`Received message: ${data}`);
                
                this.io.emit('iot-data', data);
            });

            socket.on('disconnect', () => {
                this.clients.delete(socket.id);
                console.log(`Client disconnected: ${socket.id}`);
                console.log(`Total connected clients: ${this.clients.size}`);
            });
        });
    }

    start() {
        this.server.listen(this.port, () => {
            console.log(`Socket.IO server running on port ${this.port}`);
        });
    }
}

const server = new SocketIOServer();
server.start();
