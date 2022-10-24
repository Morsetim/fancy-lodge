
import { Container, CssBaseline } from '@mui/material';
import { Box } from '@mui/system';
import Header from 'components/Header';
import TownsCard from 'components/townsCard';
import VarietiesTab from 'components/varietiesTab';
import React from 'react';
import './App.css';
import { displayOnDesktop } from 'themes/commonStyles';
import {ReactComponent as MapIcon} from 'assets/map-icon.svg'
import Footer from 'components/Footer';
import Map from 'components/Map';


function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
        }}
      >
        <Box>
          <Header />
          <VarietiesTab />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            height: 100,
            overflowY: 'scroll',
          }}
        >
          <Container maxWidth="xl" sx={{ mb: 3 }}>
            <TownsCard />
            <Box
              sx={{
                display: { xs: 'flex', md: 'none' },
              }}
            >
              {/* <MobileFooter /> */}
            </Box>
          </Container>
        </Box> 
        <Box
        sx={{ 
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center'
       }}
         className='map'
         >
          <p className='map-text'>Show map</p>
          <span className='map-icon'>
          <MapIcon />
          </span>
        </Box>
        <Map />
        <Box sx={displayOnDesktop}>
          <Footer />
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default App;
