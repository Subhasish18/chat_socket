"use strict";
import { createServer } from "node:http";
import next from "next";
import { Server } from "socket.io";
const dev = process.env.NODE_ENV !== "production";
const hostname = process.env.HOSTNAME || "localhost";
const port = parseInt(process.env.PORT || "3000", 10);
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();
app.prepare().then(() => {
    const httpServer = createServer(handle);
    const io = new Server(httpServer);
    io.on("connection", (socket) => {
        console.log(`a user connected : ${socket.id}`);
        socket.on("join-room", ({ room, userId }) => {
            socket.join(room);
            console.log(`User ${userId} joined room ${room}`);
            socket.to(room).emit("user_joined", `${userId} joined room`);
        });
        socket.on("message", ({ room, sender, message }) => {
            console.log('Message from ${sender} in room ${room}: ${message}');
            socket.to(room).emit("message", { sender, message });
        });
        socket.on("disconnect", () => {
            console.log(`user disconnected : ${socket.id}`);
        });
    });
    httpServer.listen(port, () => {
        console.log(`> Server listening at http://${hostname}:${port}`);
    });
});
