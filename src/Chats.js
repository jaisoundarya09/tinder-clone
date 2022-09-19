import React from 'react'
import Chat from './Chat'
import './Chats.css'

function Chats() {
  return (
    <div className='chats'>
        <Chat name="Mark" msg="Hello all." timestamp = "20 seconds ago" dp="https://assets1.cbsnewsstatic.com/hub/i/2018/11/06/0c1af1b8-155a-458e-b105-78f1e7344bf4/2018-11-06t054310z-1334124005-rc1be15a8050-rtrmadp-3-people-sexiest-man.jpg"/>
        <Chat name="Shawn" msg="Hello all." timestamp = "20 seconds ago" dp="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2022%2F07%2F15%2FNick-Cannon-engaged-071422.jpg"/>
        <Chat name="Susie" msg="Hello all." timestamp = "20 seconds ago" dp="https://www.biography.com/.image/t_share/MTQzMjgyNDgwNjIxODIzNTU5/jennifer-lawrence_gettyimages-626382596jpg.jpg"/>
        <Chat name="Natalie" msg="Hello all." timestamp = "20 seconds ago" dp="https://i0.wp.com/abtc.ng/wp-content/uploads/2021/02/Natalie-Portman-1.jpg?resize=770%2C515&ssl=1"/>
    </div>
  )
}

export default Chats