import React, { useState } from "react";
import "./Sidebar.css";
import { Avatar, IconButton } from "@mui/material";
import {
  DonutLarge,
  Chat,
  MoreVert,
  SearchOutlined,
} from "@mui/icons-material";

import SideBarChat from "../SideBarChat/SideBarChat";
import InfoDrawerBar from "../drawer/InfoDrawerBar";
import { useStateValue } from "../Contextapi/StateProvider";

const Sidebar = () => {
   const [openDrawer,setOpenDrawer]=useState(false)
   const [{user}]=useStateValue()
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src={user.photoURL} onClick={()=>setOpenDrawer(true)} />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert onClick={()=>setOpenDrawer(true)}  />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__Search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SideBarChat addNewChat />

        <SideBarChat />
      </div>
      <InfoDrawerBar  open={openDrawer} setOpen={setOpenDrawer} />
    </div>
  );
};

export default Sidebar;

// key={room._id}
