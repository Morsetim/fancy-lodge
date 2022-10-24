import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { towns } from 'data/mock-data';
import CardsCarosel from './CardsCarosel';


function TownsCard() {
    const [cards] = useState(towns);

  return (
    <Box sx={{ mx: 2 }}>
    <Grid container rowSpacing={3} columnSpacing={3}>
      {cards.map((venue) => {
        return (
          <Grid key={venue.id} item xs={12} sm={4} md={4} lg={3}>
            <CardsCarosel location={venue} />
          </Grid>
        );
      })}
    </Grid>
    <Box
     className='map'
     >

        </Box>
  </Box>
  )
}

export default TownsCard