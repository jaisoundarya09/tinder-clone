import { Avatar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './Chat.css'

function Chat({name, msg, dp, timestamp}) {
  return (
    <Link to={`/chats/${name}`}>
      <div className='chat'>
        <Avatar className='chat_dp' alt={name} src={dp} />
        <div className='chat_detail'>
            <h2>{name}</h2>
            <p>{msg}</p>
        </div>
        <p className='chat_time'>{timestamp}</p>
      </div>
    </Link>
  )
}

export default Chat