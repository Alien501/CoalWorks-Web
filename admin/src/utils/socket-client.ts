import { io, Socket } from "socket.io-client";

// Initialize socket connection
export const socket = io("ws://localhost:8888", {
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
});

// Add connection event handlers
socket.on("connect", () => {
  console.log("Connected to WebSocket server");
});

socket.on("disconnect", () => {
  console.log("Disconnected from WebSocket server");
});

socket.on("connect_error", (error) => {
  console.error("Connection error:", error);
});

