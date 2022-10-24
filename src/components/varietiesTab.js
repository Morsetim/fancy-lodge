import React from 'react';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { FaFilter } from 'react-icons/fa';
import { locationsTab } from 'data/mock-data';
import 'styles/layer.css'

const OptionsTab = () => {
  const [value, setValue] = React.useState(0);

  const locations = (e, location) => {
    setValue(location);
  };

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: 'flex',
          flexGrow: 1,
          px: { xs: 0, md: 2 },
          alignItems: 'center',
          mt: 2,
          mb: 2,
        }}
      >
        <Tabs
          value={value}
          onChange={locations}
          variant="scrollable"
          scrollButtons
          sx={{
              [`& .${tabsClasses.scrollButtons}`]: {
                  '&.Mui-disabled': { opacity: 0.3 },
                  borderRadius: "50%",
                  borderStyle: "solid",
                  borderWidth: "1px",
                  width: "30px",
                  height: "30px",
                  marginTop: "20px"
                },
            }}
            // className={'scroll-cirlce'}
        >
          {locationsTab.map((tab) => {
            return <Tab key={tab.id} icon={tab.icon} label={tab.label} />;
          })}
        </Tabs>
        <Button
          sx={{
            display: { xs: 'none', md: 'block' },
            border: '1px solid #ddd',
            minWidth: 90,
            justifyContent: 'space-between',
            borderRadius: 2,
            textTransform: 'capitalize',
            py: 1,
            color: 'theme.palette.text.primary',
            ml: 3
          }}
        >
          <FaFilter /> Filters
        </Button>
      </Box>
    </Container>
  );
};

export default OptionsTab;
