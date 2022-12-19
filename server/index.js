import express from "express"
import route from "./route.js"
import Connection from "./database/db.js"
import cors from "cors"
import bodyParser from "body-parser"
const app=express()
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use("/",route)
app.listen(8000,()=>{
    Connection()
    console.log("your server is running now on port at",8000)
})