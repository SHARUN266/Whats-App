import axios from "axios";

const url='';


export const addUser=async(data)=>{
       try{
        await axios.post(url,data)
       }catch(e){
        console.log(e.message)
       }
}