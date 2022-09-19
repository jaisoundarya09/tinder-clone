import { Avatar } from '@mui/material';
import React, { useState } from 'react'
import './ChatPage.css'

function ChatPage() {
  const [input, setInput] = useState("");
  const [msg, setMsg] = useState([
    {
        name:'Mark',
        image:'https://assets1.cbsnewsstatic.com/hub/i/2018/11/06/0c1af1b8-155a-458e-b105-78f1e7344bf4/2018-11-06t054310z-1334124005-rc1be15a8050-rtrmadp-3-people-sexiest-man.jpg',
        message:"Hello Sharath Wassup?"
    },
    {
        name:'Mark',
        image:'https://assets1.cbsnewsstatic.com/hub/i/2018/11/06/0c1af1b8-155a-458e-b105-78f1e7344bf4/2018-11-06t054310z-1334124005-rc1be15a8050-rtrmadp-3-people-sexiest-man.jpg',
        message:"How are you?"
    },
    {
        message:"Doing good"
    }
  ]);

  const handleSend = (e) =>{
    e.preventDefault();
    setMsg([...msg,{message:input}])
  }

  return (
    <div className='chatPage'>
        <div>
            <p className='chatpage_meeting'>You matched with Mark on 10/20/2020</p>
            {
                msg?.map((data)=>(

                    data.name?
                        (
                            <div className='chatpage_msg'>
                                <Avatar src={data.image} alt={data.name}/>
                                <p className='chat_message'>{data.message}</p>
                            </div>
                        ):
                        (
                            <div className='chatpage_msg'>
                                <p className='chat_your_message'>{data.message}</p>
                            </div>
                        )
                    
                ))
            }
        </div>
        <form action="" className='input_block'>
            <input className='input_field' type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Type a message...' />
            <button className='input_send' onClick={handleSend}>SEND</button>
        </form>

    </div>
  )
}

export default ChatPage