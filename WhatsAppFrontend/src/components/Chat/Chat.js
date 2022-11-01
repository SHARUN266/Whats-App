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
import { useRef } from "react";

const Chat = () => {
  const { person, activeUsers, socket, setNewMessageFlag, newMessageFlag } =
    useContext(AccountContext);
  const account = JSON.parse(localStorage.getItem("user"));
  const [conversation, setConversation] = useState({});
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [file, setFile] = useState();
  const [Image, setImage] = useState();
  const [incomingMessage, setIncommingMessage] = useState(null);
  const scrollRef = useRef();
  // Get Messages UseEffect
  useEffect(() => {
    socket.current.on("getMessage", (data) => {
      console.log(data, "conversation data");
      setIncommingMessage({
        ...data,
        createdAt: Date.now(),
      });
    });
  },[]);
  useEffect(() => {
    incomingMessage &&
      conversation?.members?.includes(incomingMessage.senderId) &&
      setMessages((prev) => [...prev, incomingMessage]);
  }, [incomingMessage, conversation]);

  useEffect(() => {
    const getConversationDeatils = async () => {
      let data = await getConversation({
        senderId: account.uid,
        receiveId: person.uid,
      });
      setConversation(data);
    };
    getConversationDeatils();

    ///
    const getMsg = async () => {
      let data = await getMessages(conversation?._id);
      

      setMessages(data);
      
     
    };
    conversation?._id && getMsg();
  }, [person?.uid, person?._id,conversation?._id, newMessageFlag]);
  
  const receiverId = conversation?.members?.find(member => member !== account.uid);

  const sendText = async (e) => {
    let code = e.which || e.keyCode;

    if (code == 13) {
      let message = {};
      if (!file) {
        message = {
          senderId: account.uid,
          receiverId: receiverId,
          conversationId: conversation?._id,
          type: "text",
          text: value,
        };
      } else {
        message = {
          senderId: account.uid,
          receiverId: receiverId,
          conversationId: conversation._id,
          type: "file",
          text: Image,
        };
       
      }
      // Function come
      
      socket.current.emit("sendMessage", message);
    
      await newMessage(message);
      setValue("");
      setFile();
      setImage("");
      setNewMessageFlag((prev) => !prev);
      
    }
  };
  //
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages]);

  return (
    <div className="chat">
      {Object.keys(person).length ? (
        <>
          <div className="chat__header">
            <Avatar src={person?.photoURL} />
            <div className="chat__headerInfo">
              <h3>{person?.displayName}</h3>
              <Typography>
                {activeUsers?.find((user) => user.uid == person.uid)
                  ? "Online"
                  : "Offline"}
              </Typography>
              {/* <p>last seen {new Date(Date.now()).toString().slice(0, 25)}</p> */}
            </div>
            <div className="chat__headerRight">
              <IconButton>
                <SearchOutlined />
              </IconButton>
             
              <IconButton>
                <MoreVert />
              </IconButton>
            </div>
          </div>
          <div className="chat__body">
            {
              messages?.map((message, index) => (
              
                <Message
                  scrollRef={scrollRef}
                  key={message.id}
                  message={message}
                />
              ))}
          </div>
          <Footer
            sendText={sendText}
            value={value}
            setValue={setValue}
            setFile={setFile}
            file={file}
            setImage={setImage}
          />
        </>
      ) : (
        <EmptyChat />
      )}
    </div>
  );
};

export default Chat;
