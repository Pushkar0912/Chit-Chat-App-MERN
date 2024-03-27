import React, { useState } from 'react'
import "./styles.css"
import Sidebar from './Sidebar'
import ChatArea from './chatArea.jsx'
import BodySection from './BodySection.jsx'
import CreateGroups from './CreateGroups.jsx'

const Main = () => {
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
    <div className='Main_Container'>
      <Sidebar/>
      {/* <BodySection/> */}
      <CreateGroups/>
      {/* <ChatArea props={conversation[0]}/> */}
    </div>
  )
}

export default Main
