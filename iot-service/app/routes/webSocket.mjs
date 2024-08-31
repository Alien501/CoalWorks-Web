import { Server } from "socket.io";

let io;

const initializeWebsocket = (server) => {
    io = new Server(server, {
        cors: {
            origin: "*", 
        },
    });

    io.on("connection", (socket) => {
        console.log("WebSocket connection established");

        socket.on("disconnect", () => {
            console.log("A client disconnected");
        });
    });
};

const emitSensorData = (data) => {
    if (io) {
        io.emit('iot-update', data); 
    } else {
        console.error("WebSocket server not initialized");
    }
};

export {
    initializeWebsocket,
    emitSensorData
};
