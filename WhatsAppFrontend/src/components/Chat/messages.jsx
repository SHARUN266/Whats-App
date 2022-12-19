import GetAppIcon from '@mui/icons-material/GetApp';
import { Box, Typography, styled } from "@mui/material";
import React from "react";
import { iconPDF } from "../Constants/data";
import { downloadMedia, FormateDate } from "../utils/common-utils";

const Wrapper = styled(Box)`
  background: #ffffff;
  padding: 5px;
  max-width: 60%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  margin-top:5px;
  width: fit-content;
  display: flex;
  border-radius: 5px;
  word-break: break-word;
  &::after:{
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    border-style: solid;
  }
`;

const Own = styled(Box)`
  background: #dcf8c6;
  border-width: 0px 10px 10px 0;
  padding: 5px;
  max-width: 60%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  width: fit-content;
  margin-left: auto;
  margin-top:5px;
  display: flex;
  border-radius: 5px;
  word-break: break-word;
`;

const Text = styled(Typography)`
  font-size: 14px;
  padding: 0 25px 0 5px;
`;

const Time = styled(Typography)`
  font-size: 10px;
  color: #919191;
  margin-top: 6px;
  word-break: keep-all;
  margin-top: auto;
`;
function Message({ message,scrollRef }) {
  const account = JSON.parse(localStorage.getItem("user"));
 
  return (
    <Box  ref={scrollRef}>
     {
            account.uid === message.senderId ? 
                <Own>
                    {
                        message.type === 'file' ? <ImageMessage message={message} /> : <TextMessage message={message} />
                    }
                </Own>
            : 
                <Wrapper>
                    {
                        message.type === 'file' ? <ImageMessage message={message} /> : <TextMessage message={message} />
                    }
                </Wrapper>
        }
    </Box>
  );
}
const ImageMessage = ({ message }) => {
  return (
    <div style={{ position: 'relative' }}>
    {
        message?.text?.includes('.pdf') ?
            <div style={{ display: 'flex' }}>
                <img src={iconPDF} alt="pdf-icon" style={{ width: 80 }} />
                <Typography style={{ fontSize: 14 }} >{message.text.split("/").pop()}</Typography>
            </div>
        : 
            <img style={{ width: 300, height: '100%', objectFit: 'cover' }} src={message.text} alt={message.text} />
    }
    <Time style={{ position: 'absolute', bottom: 0, right: 0 }}>
        <GetAppIcon
           onClick={(e)=>downloadMedia(e,message.text)} 
            fontSize='small' 
            style={{ marginRight: 10, border: '1px solid grey', borderRadius: '50%',cursor:"pointer" }} 
        />
        {FormateDate(message.createdAt)}
    </Time>
</div>
  );
};
const TextMessage = ({ message }) => {
  return (
    <>
      <Text>{message.text}</Text>
      <Time>{FormateDate(message.createdAt)}</Time>
    </>
  );
};

export default Message;
