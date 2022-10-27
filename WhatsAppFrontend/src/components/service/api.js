import axios from "axios";

const url = "http://localhost:8000";

export const addUser = async (data) => {
  try {
    await axios.post(`${url}/add`, data);
  } catch (e) {
    console.log(e.message);
  }
};

export const GetUser = async () => {
  try {
    let res = await axios.get(`${url}/user`);
    return res.data;
  } catch (e) {
    console.log(e.message);
  }
};

export const setConversation = async (data) => {
  try {
    await axios.post(`${url}/conversation/add`, data);
  } catch (e) {
    console.log(e.message);
  }
};

export const getConversation = async (data) => {
  try {
    let res = await axios.post(`${url}/conversation/get`, data);
    return res.data;
  } catch (e) {
    return e.message;
  }
};


export const newMessage=async(data)=>{
    try{
      await axios.post(`${url}/message/add`,data)

    }catch(e){
       return e.message
    }
};


export const getMessages=async(id)=>{

  try{
      let res=await axios.get(`${url}/messages/get/${id}`)
      return res.data
  }catch(e){
     console.log(e.message)
  }
}