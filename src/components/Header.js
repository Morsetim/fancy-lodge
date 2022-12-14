import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
// components
import Logo from './Logo';
import {
  flexBetweenCenter,
  dFlex,
  displayOnDesktop,
} from 'themes/commonStyles';
import LocationSearch from './LocationSearch';
import UserProfile from './userProfile';


const Header = () => {
  return (
    <Box
      sx={{
        ...dFlex,
        minHeight: 70,
        borderBottom: '1px solid #ddd',
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            ...flexBetweenCenter,
            minHeight: 90,
            px: 4,
          }}
        >
          <Box sx={displayOnDesktop}>
            <Logo />
          </Box>
          <Box sx={displayOnDesktop}>
            <LocationSearch />
          </Box>
          <Box sx={displayOnDesktop}>
            <UserProfile />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
