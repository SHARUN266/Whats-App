import axios from "axios";

const url = "http://localhost:8000";

export const addUser = async (data) => {
  try {
    let {data}=await axios.post(`${url}/add`, data);
    return data
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
     return  await axios.post(`${url}/message/add`,data)

    }catch(e){
      console.log('Error while calling newConversations API ', e);
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

export const UploadFile=async(data)=>{
  try{
    return await axios.post(`${url}/file/upload`,data);
  }catch(e){
    console.log(e.message)
  }
}