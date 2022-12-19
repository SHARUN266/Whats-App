import mongoose from "mongoose";


const Connection=async()=>{
    const URL="mongodb://127.0.0.1:27017/whatsappclone"
    try{
       await mongoose.connect(URL)
       console.log("Data bases connected")
    }catch(e){
        console.log(e.message)
    }
}

export default Connection;