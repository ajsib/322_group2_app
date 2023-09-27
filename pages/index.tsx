import React from 'react';
import Header from '../components/Header';
import Members from '../components/Members';
import Assignments from '../components/Assignments'; // Import the Assignments component
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

function HomePage() {
  return (
    <div>
      <Header />
      <Box display="flex" flexDirection="row" pt={3}>
        {/* Left Content */}
        <Box flexGrow={1} p={3}>
          <Assignments /> 
        </Box>

        {/* Divider */}
        <Divider orientation="vertical" flexItem />

        {/* Right Content (Members) */}
        <Box p={3}>
          <Members />
        </Box>
      </Box>
    </div>
  );
}

export default HomePage;
