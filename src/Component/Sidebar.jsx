import React, { useState } from 'react'
import "./styles.css"
import { IconButton } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import SearchIcon from '@mui/icons-material/Search';
import ConversationsItem from './ConversationsItem';

const Sidebar = () => {
  const[conversation, setConversation]=useState([
    {
      name:"name1",
      lastMessage:"last msg 1",
      timeStamp:"today"
    },
    {
      name:"name2",
      lastMessage:"last msg 2",
      timeStamp:"today"
    },
    {
      name:"name3",
      lastMessage:"last msg 3",
      timeStamp:"today"
    }
  ])

  return (
    <div className='Sidebar_Container'>
      <div className='sb_header'>
        <div>
          <IconButton>
            <AccountCircleIcon/>
          </IconButton>
       </div>
       <div>
          <IconButton>
            <PersonAddIcon/>
          </IconButton>
          <IconButton>
            <GroupAddIcon/>
          </IconButton>
          <IconButton>
            <AddCircleIcon/>
          </IconButton>
          <IconButton>
            <NightlightIcon/>
          </IconButton>
        </div>
      </div>

      <div className='sb_search'>
        <SearchIcon/>
        <input placeholder='search..' className='search_box' />
      </div>

      <div className='sb_conversation'>
        {conversation.map((conversation)=>{
          return <ConversationsItem props={conversation} key={conversation.name}/>
        })}
      </div>
    </div>
  )
}

export default Sidebar
