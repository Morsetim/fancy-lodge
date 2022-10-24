import React from 'react';
import "styles/layer.css";

import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
// react icons
import { IoSearchCircleSharp } from 'react-icons/io5';
import { pink } from '@mui/material/colors';

const options = [
  { id: 1, text: 'Anywhere' },
  { id: 2, text: 'Any week'},
  { id: 3, text: 'Add guest' }
];

const LocationSearch = () => {
  return (
    <div className='search-div'>
       {options.map(((opt) => {
        let clz = opt.id === 3 ? "last-index" : "add";
        return  <span className={clz} key={opt.id}>{opt.text}</span>

       }
        ))}
        <IoSearchCircleSharp color='#ff385c' size={40}/>
    </div>
  );
};

export default LocationSearch;
