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


const Chat = () => { 
  const {person}=useContext(AccountContext)


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
         {/* {messages.map((messages, index) => (
          <p
            className={`chat__message ${
              messages.uid === user.uid && "chat_receiver"
            }`}
            key={messages._id}
          >
            <span className="chat__name">{messages.name}</span>
            {messages.message}
            <span className="chat__timestamp">
              {new Date(messages.timestamp).toString().slice(0, 25)}
            </span>
          </p> */}
        {/* ))} */}
     </div> 
     <Footer/>
          </>
        ):(
           <EmptyChat/> 
        )
      }
      
      
    
    </div>
  );
};

export default Chat;
