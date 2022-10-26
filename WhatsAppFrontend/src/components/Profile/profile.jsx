import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React, { useContext, useReducer } from "react";
import { AccountContext } from "../Contextapi/account";

const ImageContainer = styled(Box)`
  display: flex;
  justify-content: center;
`;
const Image = styled("img")({
  width: 200,
  height: 200,
  borderRadius: "50%",
  padding: "30px 0",
});
const BoxWrapper = styled(Box)`
  background: #f2f2f2;
  padding: 12px 30px 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  & :first-child {
    font-size: 13px;
    color: #009688;
    font-weight: 200;
  }
  & :last-child {
    margin: 14px 0;
    color: #4a4a4a;
  }
`;

const DescripstionContainer=styled(Box)`
     padding:15px 20px 28px 30px;
     & > p {
        font-size:13px;
        color:#8696a0;

     }
`;
function Profile() {
  let user=JSON.parse(localStorage.getItem("user"))
  return (
    <>
      <ImageContainer>
        <Image src={user.photoURL} alt="dp" />
      </ImageContainer>

      <BoxWrapper>
        <Typography>Your name</Typography>
        <Typography>{user.displayName} </Typography>
      </BoxWrapper>
      <DescripstionContainer>
        <Typography>
          This is not your username or pin. This name will be visible to your
          whatsApp contacts.
        </Typography>
      </DescripstionContainer>
      <BoxWrapper>
        <Typography>About</Typography>
        <Typography>Eat! Code! Sleep! Repeat...</Typography>
      </BoxWrapper>
    </>
  );
}

export default Profile;
