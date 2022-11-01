import { useEffect } from "react";

import {
  EmojiEmotions,
  AttachFile,
  Mic,
  EmojiEmotionsOutlined,
  ImportContacts,
 
} from "@mui/icons-material";
import { Box, styled, InputBase, IconButton } from "@mui/material";
import { useState } from "react";
import { UploadFile } from "../service/api";
const Container = styled(Box)`
  height: 55px;
  background: #ededed;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 15px;
  & > * {
    margin: 5px;
    color: #919191;
  }
`;

const Search = styled(Box)`
  border-radius: 18px;
  background-color: #ffffff;
  width: calc(94% - 100px);
`;

const InputField = styled(InputBase)`
  width: 100%;
  padding: 20px;
  padding-left: 25px;
  font-size: 14px;
  height: 20px;
  width: 100%;
`;

const ClipIcon = styled(AttachFile)`
  transform: "rotate(40deg)";
`;

const Footer = ({ sendText, setValue, value ,setFile,file,setImage}) => {
  useEffect(()=>{
      const getImage=async()=>{
        if(file){
          const data=new FormData()
          data.append("name",file.name)
          data.append("file",file);
          const response=await UploadFile(data)
          setImage(response?.data)
        }
      }
      getImage()
  },[file])
 
  function onFileChange(e){
   
     setFile(e.target.files[0]);
     setValue(e.target.files[0].name)
  }
  
  return (
    <Container>
      <IconButton>
        <EmojiEmotionsOutlined />
      </IconButton>
      
        <label htmlFor="fileInput">
          <ClipIcon />
        </label>
     
      <input type="file" id="fileInput" onChange={(e)=>onFileChange(e)}  style={{ display: "none" }} />

      <Search>
        <InputField
          value={value}
          placeholder="Type a message"
          inputProps={{ "aria-label": "search" }}
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={(e) => sendText(e)}
        />
      </Search>
      <IconButton>
        <Mic />
      </IconButton>
    </Container>
  );
};

export default Footer;
