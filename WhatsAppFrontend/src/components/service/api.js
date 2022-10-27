import axios from "axios";

const url='http://localhost:8000/add';


export const addUser=async(data)=>{
       try{
        await axios.post(url,data)
       }catch(e){
        console.log(e.message)
       }
}


export const GetUser=async()=>{
       try{
              let res=await axios.get("http://localhost:8000/user")
              return res.data

       }catch(e){
              console.log(e.message)
       }
}

export const setConversation=async(data)=>{
       try{
         await axios.post("http://localhost:8000/conversation/add",data)

       }catch(e){
              console.log(e.message)
       }

}