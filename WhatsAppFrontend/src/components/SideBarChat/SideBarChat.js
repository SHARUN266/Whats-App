import React, { useState, useEffect } from "react";
import "./SideBarChat.css";
import { Avatar } from "@mui/material";

import { Link } from "react-router-dom";

const SideBarChat = () => {
  const [addNewChat, setAddNewChat] = useState(false);

  return !addNewChat ? (
    <Link to={`/rooms/1`}>
      <div className="sidebarChat">
        <Avatar />
        <div className="sidebarChat__info">
          <h2>Sharun</h2>
        </div>
      </div>
    </Link>
  ) : (
    <div className="sidebarChat">
      <h2> Add NewChat</h2>
    </div>
  );
};

export default SideBarChat;
