import express from "express";
import { addUser, getUser } from "./controller/user.controller.js";

const route=express.Router();



route.post("/add",(req,res)=>{
   // console.log(req.body)
  addUser(req,res)
})
route.get("/user",(req,res)=>{
 getUser(req,res)
})


export default route;