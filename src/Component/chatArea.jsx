import React from 'react'
import "./styles.css"
import { IconButton } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function ChatArea({ props }){
    console.log(props);
    if (!props || !props.name || !props.timeStamp) {
        return null; // Return null if props is undefined or doesn't contain necessary properties
      }
    
  return (
    <div className='chatArea_container'>
        <div className='chatArea_header' >
            <p className='co-icon'>{props.name ? props.name[0] : 'P'}</p>
            <div className='header-text'>
                <p className='co-title'>{props.name ? props.name : 'Pushkar'}</p>
                <p className='co-timeStamp'>{props.timeStamp?props.timeStamp:"today"}</p>
            </div>
            <IconButton>
                <DeleteForeverIcon/>
            </IconButton>
        </div>
        <div className='msg_container'>msg_container</div>
        <div className='text_input_area'>
            <input placeholder='Type a Message...' className='search_box'/>
            <IconButton>
                <SendIcon/>
            </IconButton>
        </div>
    </div>
  )
}

export default ChatArea
