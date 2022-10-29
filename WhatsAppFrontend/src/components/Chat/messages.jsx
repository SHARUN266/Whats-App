import { Box, Typography, styled } from "@mui/material";
import React from "react";
import { FormateDate } from "../utils/common-utils";

const Wrapper = styled(Box)`
  background: #ffffff;
  padding: 5px;
  max-width: 60%;
  width: fit-content;
  display: flex;
  border-radius: 10px;
  word-break: break-word;
`;

const Own = styled(Box)`
  background: #dcf8c6;
  padding: 5px;
  max-width: 60%;
  width: fit-content;
  margin-left: auto;
  display: flex;
  border-radius: 10px;
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
function Message({ message }) {
  const account = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      {account.uid === message.senderId ? (
        <Own>
          <Text>{message.text}</Text>
          <Time>{FormateDate(message.createdAt)}</Time>
        </Own>
      ) : (
        <Wrapper>
          <Text>{message.text}</Text>
          <Time>{FormateDate(message.createdAt)}</Time>
        </Wrapper>
      )}
    </>
  );
}

export default Message;
