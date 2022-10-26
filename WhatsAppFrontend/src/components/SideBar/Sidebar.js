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
import { useEffect } from "react";
import { useContext } from "react";
import { AccountContext } from "../Contextapi/account";
import { GetUser } from "../service/api";


const Sidebar = () => {
   const [openDrawer,setOpenDrawer]=useState(false)
   
   let user=JSON.parse(localStorage.getItem("user"))
   const [addNewChat, setAddNewChat] = useState([]);
   useEffect(() => {
    
     const fetchData = async () => {
       let res = await GetUser()
       setAddNewChat(res);
     };
 
     fetchData();
   }, []);
  
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
        {
          addNewChat.map((elem)=>(
           elem.uid!==user.uid &&
            <SideBarChat key={elem.uid} {...elem} />
          ))
        }
        

        
      </div>
      <InfoDrawerBar  open={openDrawer} setOpen={setOpenDrawer} />
    </div>
  );
};

export default Sidebar;

// key={room._id}
