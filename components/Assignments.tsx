import React, { useState, useEffect } from 'react';
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import styled from '@emotion/styled';
import axios from 'axios';

const Assignments = () => {
  const [activeAssignment, setActiveAssignment] = useState(null);
  const [files, setFiles] = useState([]);
  const [activeFile, setActiveFile] = useState(null);

  useEffect(() => {
    if (activeAssignment) {
      axios.get(`/api/getFiles?assignment=${activeAssignment}`)
        .then(response => {
          setFiles(response.data.files);
        })
        .catch(error => {
          console.error('Could not fetch files:', error);
        });
    }
  }, [activeAssignment]);

  const assignments = [
    {
      label: "A1",
      url: "#",
      icon: "📖"
    },
    {
      label: "A2",
      url: "#",
      icon: "🎓"
    },
    {
      label: "A3",
      url: "#",
      icon: "📄"
    },
    // ... (Keep your existing items if you wish)
  ];

  const StyledDiv = styled.div`
    display: flex;
    justify-content: flex-start;
  `;
  
  const StyledCard = styled(Card)`
    flex: 0 0 auto;
    width: 30%; 
    margin: 5px;   
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;


  const DocumentCard = styled(Card)`
    flex: 0 0 auto;
    width: 20%; 
    margin: 5px;   
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

return (
  <>
    <StyledDiv>
    {assignments.map((assignment, index) => (
          <StyledCard key={index}>
            <CardActionArea onClick={() => setActiveAssignment(assignment.label)}>
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
    {activeAssignment && (
      <StyledDiv>
        {files.map((file, index) => (
          <DocumentCard key={index} >
            <CardActionArea onClick={() => setActiveFile(file)} >
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {file}
                </Typography>
              </CardContent>
            </CardActionArea>
          </DocumentCard>
        ))}
      </StyledDiv>
    )}
    {activeFile && (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '20px',
        }}
      >
        <iframe src={`/api/getFile?assignment=${activeAssignment}&file=${activeFile}`} width="60%" height="900vh" />
      </div>
    )}
  </>
);
};

export default Assignments;