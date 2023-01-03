
import { Container, CssBaseline } from '@mui/material';
import { Box } from '@mui/system';
import Header from 'components/Header';
import TownsCard from 'components/townsCard';
import VarietiesTab from 'components/varietiesTab';
import React, { useState } from 'react';
import './App.css';
import { displayOnDesktop } from 'themes/commonStyles';
import {ReactComponent as MapIcon} from 'assets/map-icon.svg'
import Footer from 'components/Footer';
import { towns } from 'data/mock-data';
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';

const nigeria = {lat:6.5244, lng:3.3792}

function App() {
  const [mapview, setMapView] = useState(true);
  const [activeMarker, setActiveMarker] = useState(null);
  const [step, setStep] = useState(1);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_FARM_SMARTER_MAP_API_KEY,
    libraries: ['places'],
});

  const showMap = () => {
    setMapView(!mapview)
    setStep(2)
  }

  if (!isLoaded) {
    return (
        <div>Loading....</div>
    )
}

const goBack = () => {
  setStep(1)
  setMapView(true)
}

const handleActiveMarker = (marker) => {
  if (marker === activeMarker) {
      return;
  }
  setActiveMarker(marker);
};

  return (
    <React.Fragment>
      <CssBaseline />
      {mapview && step === 1 && <Box
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
          alignItems: 'center',
          cursor: 'pointer'
       }}
         className='map'
         >
          <p className='map-text' onClick={showMap}>Show map</p>
          <span className='map-icon'>
          <MapIcon />
          </span>
        </Box>
        <Box sx={displayOnDesktop}>
          <Footer />
        </Box>
      </Box>
      }
       {!mapview && step === 2 && <div className='g-map'>
       <GoogleMap
          center={nigeria}
          // ref={containerRef}
          zoom={12}
          mapContainerStyle={{ width: '100%', height: '90%', overflow: 'auto' }}
          options={{
              zoomControl: false,
              mapTypeControl: false,
              fullscreenControl: false,
              // gestureHandling: "greedy",
          }}
      >
          {towns.map(({id, cord, location }) => (
              <Marker
                  key={id}
                  position={cord}
                  // options={{
                  //     icon: CustomMarker
                  // }}
                  onClick={() => handleActiveMarker(id)}
              >
                  {activeMarker === id ? (
                      <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                          <div>{location}</div>
                      </InfoWindow>
                  ) : null}
              </Marker>
          ))}
        </GoogleMap>
        <p className='back' onClick={goBack}>&#8592; Back to homes</p>
        </div>
        }
    </React.Fragment>
  );
}

export default App;
