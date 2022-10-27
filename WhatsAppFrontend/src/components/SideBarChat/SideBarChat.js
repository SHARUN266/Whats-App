import React, { useState } from "react";
import "./SideBarChat.css";
import { Avatar } from "@mui/material";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { AccountContext } from "../Contextapi/account";
import { setConversation } from "../service/api";


const SideBarChat = ({props}) => {
  const {setPerson,account}=useContext(AccountContext)
  async function UserGet(){
      setPerson(props)
      await setConversation({senderId:account.uid,receiveId:props.uid})
   }


  return (
    <Link key={props.uid} to={`rooms/${props.uid}`} >
    <div className="sidebarChat" onClick={UserGet}>
      <Avatar src={props.photoURL} />
      <div className="sidebarChat__info">
        <h2>{props.displayName}</h2>
      </div>
    </div>
    </Link>
  )
};

export default SideBarChat;
