import express from "express"
const app = express();
import http from "http"
const server = http.createServer(app);
import {Server} from "socket.io"
const io = new Server(5000, {
    cors: {
        origin: 'http://localhost:3000',
    }, 
})
let users=[]
const addUser = (userData, socketId) => {
    !users.some(user => user.uid === userData.uid) && users.push({ ...userData, socketId });
}
const removeUser = (socketId) => {
    users = users.filter(user => user.socketId !== socketId);
}
const getUser=(userId)=>{
 
    return users.find(user=>user.uid===userId)
  
}
io.on('connection', (socket) => {
  console.log('a user connected');
  
    //connect
    socket.on("addUser", userData => {
      
        addUser(userData, socket.id);
       
        io.emit("getusers", users);
        
    })
    // Send message
    socket.on('sendMessage', (data) => {
        const user = getUser(data.receiverId);
        console.log(user,"sharun")
    
        io.to(user?.socketId).emit('getMessage', data)
    })
     //disconnect
     socket.on('disconnected', () => {
        console.log('user disconnected');
        removeUser(socket.id);
        io.emit('getUsers', users);
    })
});

