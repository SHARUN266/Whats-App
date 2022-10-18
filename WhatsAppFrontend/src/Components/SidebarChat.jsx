import React from 'react'
import "./sidebarChat.css";
import { IconButton, Avatar } from "@mui/material";
function SidebarChat() {
  return (
    <div  className='sidebarChat' >
        <Avatar/>
        <div className="sidebarChat__info">
            <h2>Room name</h2>
            <p>This is the last message...</p>
        </div>
    </div>
  )
}

export default SidebarChat