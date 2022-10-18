import React from "react";
import "./sidebar.css";


//import { IconButton } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import { Avatar,IconButton } from "@chakra-ui/react";
import SidebarChat from "./SidebarChat";
function Sidebar() {
  document.title = "Sidebar";
  return (
    <div className="sidebar">
      <div className="sidebar__header">
      <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
        {/* <Avatar alt="my-image" src="https://avatars.githubusercontent.com/u/101327895?s=40&v=4" />  */}
        <div className="sidebar__headerRight">
           <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
         </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlinedIcon/>
          <input type="text" placeholder="Search or start a new chat" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>
      </div>
    
    </div>
    
  );
}

export default Sidebar;
