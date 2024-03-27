import React from 'react'
import logo from "../assets/welcome.png"

const BodySection = () => {
  return (
    <div className='welcome-container'>
        <img src={logo} alt='logo'
        className='welcome-logo'/>
        <p>View and text directly to people present in the chat Room</p>
    </div>
  )
}

export default BodySection
