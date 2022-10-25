import React from 'react';
import "styles/layer.css";

// react icons
import { IoSearchCircleSharp } from 'react-icons/io5';

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
