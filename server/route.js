import express from "express";

import { getConversation, newConversation } from "./controller/conversation.controller.js";
import { getImage, uploadFile } from "./controller/Image.controller.js";
import { getMessages, newMessage } from "./controller/message.controller.js";
import { addUser, getUser } from "./controller/user.controller.js";
import upload from "./utils/upload.js";

const route=express.Router();



route.post("/add",(req,res)=>{
   // console.log(req.body)
  addUser(req,res)
})
route.get("/user",(req,res)=>{
 getUser(req,res)
})

route.post("/conversation/add",(req,res)=>{
    newConversation(req,res)
})
route.post("/conversation/get",(req,res)=>{
     getConversation(req,res)
})
route.post("/message/add",(req,res)=>{
  newMessage(req,res)
})

route.get("/messages/get/:id",(req,res)=>{
  getMessages(req,res)
})

route.post("/file/upload",upload.single("file"),((req,res)=>{
    uploadFile(req,res)
}));

route.get("/file/:filename",(req,res)=>{
    getImage(req,res)
})


export default route;