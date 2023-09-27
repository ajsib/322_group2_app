import React from 'react';
import Typography from '@mui/material/Typography';

const Header: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f3f3f3' }}>
      <Typography variant="h3" style={{ fontWeight: 'bold' }}>ArchAngels</Typography>
      <Typography variant="subtitle1" style={{ fontSize: '16px', margin: '0' }}>CISC 322 Project Group 2 Fall 2023</Typography>
    </div>
  );
};

export default Header;
