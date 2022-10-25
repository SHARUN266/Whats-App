import React, { useEffect, useState } from "react";
import { Avatar, IconButton } from "@mui/material";
import {
  AttachFile,
  InsertEmoticon,
  MoreVert,
  SearchOutlined,
} from "@mui/icons-material";
import "./Chat.css";
import { useStateValue } from "../Contextapi/StateProvider";


const Chat = () => {
   const [{user}] =useStateValue()

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={user.photoURL} />
        <div className="chat__headerInfo">
          <h3>  Welcome to Whatsapp</h3>
          <p>last seen {new Date(Date.now()).toString().slice(0, 25)}</p>
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
          </p>
        ))} */}
      </div>
      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input
            type="text"
            placeholder="Message"
           
          />
          <button > send message</button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
