import React, { useEffect, useState } from "react";
import { Avatar, IconButton, Typography } from "@mui/material";
import {
  AttachFile,
  InsertEmoticon,
  MoreVert,
  SearchOutlined,
} from "@mui/icons-material";
import "./Chat.css";

import EmptyChat from "./EmptyChat";
import Footer from "./Footer";
import { useContext } from "react";
import { AccountContext } from "../Contextapi/account";
import { getConversation, getMessages, newMessage } from "../service/api";
import Message from "./messages";


const Chat = () => { 
  const {person}=useContext(AccountContext)
  const account=JSON.parse(localStorage.getItem("user"))
  const [conversation,setConversation]=useState({})
  const [value,setValue]=useState('')
  const [messages,setMessages]=useState([])
 
  useEffect(()=>{
   
    const getConversationDeatils=async()=>{
      let data = await getConversation({senderId:account.uid,receiveId:person.uid});
      setConversation(data)
    }
    getConversationDeatils()

    ///
    const getMsg=async()=>{
      let data = await getMessages(conversation._id)
      setMessages(data)
     }
     conversation._id && getMsg()
  },[person.uid,person._id,conversation._id,messages])
  const sendText=async(e)=>{
    let code=e.which||e.keyCode;
    
    if(code==13){
       let message={
        senderId:account.uid,
        receiverId:person.uid,
        conversationId:conversation._id,
        type:'text',
        text:value
       
       }
       // Function come
       await newMessage(message)
       setValue("")
    }

  }
 
  return (
    <div className="chat">
      {
        Object.keys(person).length?(
          <>
          <div className="chat__header">
        <Avatar  src={person.photoURL}/>
        <div className="chat__headerInfo">
          <h3>{person.displayName}</h3>
          <Typography>Offline</Typography>
          {/* <p>last seen {new Date(Date.now()).toString().slice(0, 25)}</p> */}
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
          {messages&& messages.map((messages, index) => (
           <Message message={messages}/>
          
         ))} 
     </div> 
     <Footer sendText={sendText} value={value} setValue={setValue} />
          </>
        ):(
           <EmptyChat/> 
        )
      }
      
      
    
    </div>
  );
};

export default Chat;
