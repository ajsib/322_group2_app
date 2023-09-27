import React from 'react';
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import styled from '@emotion/styled';

const Assignments = () => {
    const assignments = [
      {
        label: "Project Overview",
        url: "#",
        icon: "📖"
      },
      {
        label: "Tutorials",
        url: "#",
        icon: "🎓"
      },
      {
        label: "Documents",
        url: "#",
        icon: "📄"
      },
      {
        label: "Books",
        url: "#",
        icon: "📚"
      },
      {
        label: "Discussion Groups",
        url: "#",
        icon: "💬"
      },
      {
        label: "Group Policy",
        url: "#",
        icon: "🛡️"
      },
      {
        label: "Source Code",
        url: "https://github.com/xbmc/xbmc", // Kodi's GitHub repo
        icon: "💻"
      },
    ];

const StyledDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  `;
  
  const StyledCard = styled(Card)`
    width: 150px;
    height: 150px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  return (
    <StyledDiv>
      {assignments.map((assignment, index) => (
        <StyledCard key={index}>
          <CardActionArea href={assignment.url}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {assignment.icon}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {assignment.label}
              </Typography>
            </CardContent>
          </CardActionArea>
        </StyledCard>
      ))}
    </StyledDiv>
  );
};

export default Assignments;