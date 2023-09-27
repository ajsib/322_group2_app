import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Typography from '@mui/material/Typography';

const Member = ({ name, bio, email, github, linkedin }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Box p={2}>
      <Typography variant="h6">{name}</Typography>
      <Box display="flex" alignItems="center">
        <Avatar alt={name} src="/default-avatar.jpg" />
        <IconButton aria-label="expand biography" onClick={toggleExpand}>
          <ExpandMoreIcon />
        </IconButton>
      </Box>
      {expanded && <Typography variant="body2">{bio}</Typography>}
      <Box>
        <IconButton aria-label="GitHub" onClick={() => window.open(github, '_blank')}>
          <GitHubIcon />
        </IconButton>
        <IconButton aria-label="LinkedIn" onClick={() => window.open(linkedin, '_blank')}>
          <LinkedInIcon />
        </IconButton>
        <IconButton aria-label="Email" onClick={() => window.open(`mailto:${email}`, '_blank')}>
          <EmailIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

const Members = () => {
  return (
    <Box>
      <Typography variant="h5" fontWeight="bold">
        Members
      </Typography>
        <Member 
            name="Aidan Sibley" 
            bio="You can Write a Bio here!" 
            email="20ajs18@queensu.ca" 
            github="https://github.com/ajsib" 
            linkedin="https://linkedin.com/in/aidansibley"
        />
        <Member 
            name="Bianca Bucchino" 
            bio="" 
            email="" 
            github="" 
            linkedin=""
        />
        <Member 
            name="Adam Clarke" 
            bio="" 
            email="" 
            github="" 
            linkedin=""
        />
        <Member 
            name="Christian Higham" 
            bio="" 
            email="" 
            github="" 
            linkedin=""
        />
        <Member 
            name="Omar Ibrahim" 
            bio="" 
            email="" 
            github="" 
            linkedin=""
        />
        <Member 
            name="Owen Rocchi" 
            bio="" 
            email="" 
            github="" 
            linkedin=""
        />

      {/* Add up to 6 members here */}
    </Box>
  );
};

export default Members;
