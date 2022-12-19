import React, { useState } from "react";

import { Avatar, Typography, styled, Divider } from "@mui/material";
import MmsIcon from '@mui/icons-material/Mms';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AccountContext } from "../Contextapi/account";
import { getConversation, setConversation } from "../service/api";
import { useEffect } from "react";
import { FormateDate } from "../utils/common-utils";
import { Box } from "@mui/system";
import { emptyProfilePicture } from "../Constants/data";
const Component = styled(Box)`
  height: 45px;
  display: flex;
  padding: 13px 0;
  cursor: pointer;


  &:hover {
    background-color: #cdcfd1;
    transition: 1s;
  }
`;

const Image = styled("img")({
  width: 50,
  height: 50,
  objectFit: "cover",
  borderRadius: "50%",
  padding: "0 14px",
});
const Container = styled(Box)`
  display: flex;
`;

const Timestamp = styled(Typography)`
  font-size: 12px;
  margin-left: auto;
  color: #00000099;
  margin-right: 20px;
`;

const Text = styled(Typography)`
  display: block;
  color: rgba(0, 0, 0, 0.6);
  font-size: 14px;
`;
const SideBarChat = ({ props }) => {
  const url=props.photoURL|| emptyProfilePicture
  const [msg, setMsg] = useState({});
  const { setPerson, newMessageFlag } = useContext(AccountContext);
  const account = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    const getConversationAndDetails = async () => {
      const data = await getConversation({
        senderId: account.uid,
        receiveId: props.uid,
      });
      console.log(data,"coversation")
      setMsg({ text: data?.message, timestamp: data?.updatedAt });
      
    };
    getConversationAndDetails();
    

  }, [newMessageFlag]);
  async function UserGet() {
    setPerson(props);
    await setConversation({ senderId: account.uid, receiveId: props.uid });
  }

  return (
    <Link  to={`rooms/${props.uid}`}>
      <Divider variant="middle" />
      <Component key={props.uid} onClick={() => UserGet()}>
        <Box>
          <Image src={url} alt="display picture" />
        </Box>
        <Box style={{ width: "100%" }}>
          <Container>
            <Typography>{props.displayName}</Typography>
            {msg?.text && <Timestamp>{FormateDate(msg?.timestamp)}</Timestamp>}
          </Container>
          <Box>
            <Text>{msg?.text?.includes("localhost") ? <MmsIcon fontSize="small" /> : msg.text}</Text>
          </Box>
        </Box>
      </Component>
    </Link>
  );
};

export default SideBarChat;
