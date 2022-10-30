import mongoose from "mongoose";

const MessageSchema=new mongoose.Schema({
    conversationId:{
        type:String
    },
    senderId:{
           type:String
    },
    receiverId:{
        type:String
    },
    type:{
      type:String
    },
    text:{
        type:String
    }
},
{
    versionKey:false,
    timestamps:true
})

const message=mongoose.model("message",MessageSchema)
export default message