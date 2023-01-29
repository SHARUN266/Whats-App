import express from "express";
import http from "http";
import socketio from "socket.io";
import jwt from "jsonwebtoken";

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const SECRET_KEY = "mysecretkey";

let users = [];

const addUser = (userData, socketId) => {
    !users.some((user) => user.uid === userData.uid) &&
        users.push({ ...userData, socketId });
};

const removeUser = (socketId) => {
    users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
    return users.find((user) => user.uid === userId);
};

io.use((socket, next) => {
    const token = socket.handshake.query.token;
    if (!token) return next(new Error("authentication error"));
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) return next(new Error("authentication error"));
        socket.decoded = decoded;
        next();
    });
});

io.on("connection", (socket) => {
    console.log("a user connected");

    //connect
    socket.on("addUser", (userData) => {
        addUser(userData, socket.id);
        io.emit("getusers", users);
    });

    // Send message
    socket.on("sendMessage", (data) => {
        const user = getUser(data.receiverId);
       

        io.to(user?.socketId).emit("getMessage", data);
    });

    //disconnect
    socket.on("disconnected", () => {
        console.log("user disconnected");
        removeUser(socket.id);
        io.emit("getUsers", users);
    });
});

server.listen(5000, () => {
    console.log("server started on port 5000");
});
