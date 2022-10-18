import React, { useState } from "react";
import "./chat.css";

import { IconButton, Avatar } from "@mui/material";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MicIcon from "@mui/icons-material/Mic";
import SendIcon from "@mui/icons-material/Send";

import EmojiPicker, {
  EmojiStyle,
  SkinTones,
  Theme,
  Categories,
  EmojiClickData,
  Emoji,
  SuggestionMode,
} from "emoji-picker-react";
import axios from "./axios";

import AlertDialogSlide from "./EmojiBox";
function Chat({ msg }) {
  const [selectedEmoji, setSelectedEmoji] = useState("");
  let bag="";
  bag=bag+selectedEmoji;
  const [input, setInput] = useState([])
  document.title = "Chat";
  const sendMessage = (e) => {
    e.preventDefault();

    axios.post("messages/new", {
      message:input+bag
        
      ,
      name: "Hello",
      timestamp: `${new Date().getHours()}:${new Date().getMinutes()}`,
      received: true,
    });
    setInput("");
    setSelectedEmoji("")
  };

  
//Emoji box


function handleEmoji(IEmojiData , event) {
  console.log( <Emoji
    unified={selectedEmoji}
    
    size={22}
  />)
console.log(event)
  setSelectedEmoji([...selectedEmoji ,event.emoji].join(""));

}



  return (
    <div className="chat">
           
      <div className="chat__header">
        {/* <Avatar />
         */}

        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last Seen at ....</p>
        </div>
  
        <div className="chat__headerRight">
          {/* <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <AttachFileOutlinedIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton> */}
        </div>
        
      </div>
      <div className="char__body">
        {msg.map((m) => (
          <p className={`chat__message ${m.received ? "chat__receiver" : ""}`}>
            <span className="chat__name">{m.name}</span>
            {m.message}
            <span className="chat__timestamp">{m.timestamp}</span>
          </p>
        ))}
      </div>
     
      <div className="chat__footer">
      
      <AlertDialogSlide handleEmoji={handleEmoji}  />
        <form>
          <input
            value={input+bag}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Message"
          />
          <button onClick={sendMessage} type="submit">
            {input == "" ? <MicIcon /> : <SendIcon />}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
