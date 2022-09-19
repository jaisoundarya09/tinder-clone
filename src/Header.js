import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import './Header.css'
import { Icon, IconButton } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';

function Header({backbutton}) {
  const navigate = useNavigate();
  return (
    <div className='header'>
        {
          backbutton ? (
            <IconButton onClick={()=>navigate(backbutton)}><ArrowBack className='header_icon' fontSize='large'/></IconButton>
          ):
          (
            <IconButton><PersonIcon className='header_icon' fontSize='large'/></IconButton>
          )
        }
        <Link to='/'>
          <img className='header_logo' src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png" alt="tinder-logo" />
        </Link>
        <Link to='/chats'>
          <IconButton><ForumIcon className='header_icon' fontSize='large'/></IconButton>
        </Link>
    </div>
  )
}

export default Header