import React from 'react';
import { BsGlobe } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaRegUserCircle } from 'react-icons/fa';
import { Button } from '@mui/material';



const UserProfile = () => {
  return (
    <div className='main-profile'>
        <div className='host-container'>
          <h2 className='host-text'>Become a Host</h2>
        </div>
        <div className='globe'>
          <BsGlobe size={24} />
        </div>
        <div className='user-circle'>
            <AiOutlineMenu size={24} />
            <FaRegUserCircle size={24} />
        </div>
    </div>
  )
}

export default UserProfile;