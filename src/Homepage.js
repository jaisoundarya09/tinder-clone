import { Close, Favorite, FlashOn, Replay, StarRate } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React, { useEffect } from 'react'
import { useState } from 'react'
import TinderCard from 'react-tinder-card';
import db from './firebase'
import './Homepage.css'

function Homepage() {
  const [people, setPeople] = useState([]);

    useEffect(()=>{
        const unsubscribe = db.collection('people').onSnapshot((snapshot)=>(
            setPeople(snapshot.docs.map(doc=>doc.data()))
        ));
        return ()=>{
            //cleanup function
            unsubscribe()
        }
    },[people]);

    const handleRefresh = () =>{
        window.location.reload();
    }
  return (
    <div>
        <div className="card_container">
            {
                people?.map((person, index)=>(
                    <TinderCard 
                    className='swipe' 
                    key={person.name} 
                    preventSwipe={['up', 'down']}>

                        <div style={{backgroundImage:`url(${person.url})`}} className='card'>
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))
            }
        </div>
        <div className='swipeButtons'>
            <IconButton className='button_repeat' onClick={handleRefresh}><Replay fontSize='large'/></IconButton>
            <IconButton className='button_close'><Close fontSize='large'/></IconButton>
            <IconButton className='button_starrate'><StarRate fontSize='large'/></IconButton> 
            <IconButton className='button_fav'><Favorite fontSize='large'/></IconButton>
            <IconButton className='button_flash'><FlashOn fontSize='large'/></IconButton>
        </div>
    </div>
  )
}

export default Homepage