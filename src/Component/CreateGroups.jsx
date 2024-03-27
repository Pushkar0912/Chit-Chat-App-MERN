import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded';
import { IconButton } from '@mui/material'
import React from 'react'

const CreateGroups = () => {
  return (
    <div className='createGroup-container'>
        <input className='search_box' placeholder='Enter Group Name'/>
        <IconButton>
            <DoneOutlineRoundedIcon/>
        </IconButton>
    </div>
  )
}

export default CreateGroups
