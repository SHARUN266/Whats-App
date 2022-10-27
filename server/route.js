import express from "express";

import { getConversation, newConversation } from "./controller/conversation.controller.js";
import { newMessage } from "./controller/message.controller.js";
import { addUser, getUser } from "./controller/user.controller.js";

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


export default route;