import React, { useState } from "react";
import "./SideBarChat.css";
import { Avatar } from "@mui/material";

import { Link } from "react-router-dom";


const SideBarChat = (props) => {
 


  return (
    <Link key={props.uid} to={`/rooms/${props.uid}`}>
    <div className="sidebarChat">
      <Avatar src={props.photoURL} />
      <div className="sidebarChat__info">
        <h2>{props.displayName}</h2>
      </div>
    </div>
    </Link>
  )
};

export default SideBarChat;
