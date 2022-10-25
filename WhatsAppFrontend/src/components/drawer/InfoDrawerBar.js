


import { ArrowBackOutlined } from '@mui/icons-material'
import { Box, Drawer, Typography,styled } from '@mui/material'
import React from 'react'
import Profile from '../Profile/profile'
const Header=styled(Box)`
    background:#008069;
    height:107px;
    color:white;
    display:flex;
    &>svg,&>p{
        
        margin-top:auto;
        padding:15px;
       
        font-weight:600;
    }
`
const Components=styled(Box)`
    background:#ededed;
    height:85%;
`
const drawerStyle={
    width:'30%'
}
export default function InfoDrawerBar({open,setOpen}) {
    function handleClose(){
        setOpen(false)
    }
  return (
    <div>
      <Drawer
   
      open={open}
      PaperProps={{sx:drawerStyle}}
      onClose={handleClose}
    >
     <Header>
      <ArrowBackOutlined  onClick={()=>setOpen(false)} />
      <Typography>Profile</Typography>
     </Header>
     <Components>
        <Profile/>
     </Components>
    </Drawer>
    </div>
  )
}
