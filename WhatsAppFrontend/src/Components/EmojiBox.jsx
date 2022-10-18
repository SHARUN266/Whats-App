import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import InsertEmoticonOutlinedIcon from "@mui/icons-material/InsertEmoticonOutlined";
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { IconButton, Avatar } from "@mui/material";
import EmojiPicker, {
    EmojiStyle,
    SkinTones,
    Theme,
    Categories,
    EmojiClickData,
    Emoji,
    SuggestionMode,
  } from "emoji-picker-react";
// const Transition = React.forwardRef(function Transition({ref,props}) {
//   return <Slide direction="left" ref={ref} {...props} />;
// });

export default function AlertDialogSlide({handleEmoji}) {
    const [open, setOpen] = React.useState(false);
   
  

    const handleClickOpen = () => {
      setOpen(true);
    };
    
    const handleClose = () => {
      setOpen(false);
    };
  return (
    <div>
      <IconButton  onClick={handleClickOpen}>
        <InsertEmoticonOutlinedIcon/>
      </IconButton>
      <Dialog
      style={{border:"2px solid"}}
        open={open}
       
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
       <EmojiPicker
        onEmojiClick={handleEmoji}
        autoFocusSearch={false}
        
        pickerStyle={{ width: '100%', height:"50vh" }}
        />
      </Dialog>
    </div>
  );
}
