// Importing Data
import express from "express"
import mongoose from 'mongoose'
import Messages from './dbMessages.js'
import Pusher from "pusher";
import cors from "cors"
//Pusher
const pusher = new Pusher({
    appId: "1487686",
    key: "1971187072fdeafcb1e6",
    secret: "92d2ceb7f4e9f2e04cdb",
    cluster: "ap2",
    useTLS: true
  });
  
 
const db=mongoose.connection
db.once('open',()=>{
    console.log("Our DB connection");
    const msgCollection=db.collection('messagecontents')
    const changeStream=msgCollection.watch()
    changeStream.on('change',(change)=>{
        console.log(change)
        if(change.operationType==='insert'){
            const messageDetails=change.fullDocument;
            pusher.trigger('messages','inserted',{
                name:messageDetails.name,
                message:messageDetails.message,
            })
        }else {
            console.log("Error");
        }
    })
})


// App Config
const app=express()
const port=process.env.PORT||8080



// MiddleWare
app.use(express.json())
app.use(cors())
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","*");
    next()
})
// DB Config
const connection_url=`mongodb+srv://Sharun:sharun@cluster0.2vj7sbb.mongodb.net/WhatsAppClone?retryWrites=true&w=majority`
mongoose.connect(connection_url)

// Api routes
app.get("/",(req,res)=>{
     res.status(200).send('Hello! world...')
})

app.get('/messages/sync',(req,res)=>{
    Messages.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
})


app.post('/messages/new',(req,res)=>{
    const dbMessage=req.body

    Messages.create(dbMessage,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else {
            res.status(201).send(data)
        }
    })
})

//listen

app.listen(port,()=>{
    console.log('Your server is running')
})