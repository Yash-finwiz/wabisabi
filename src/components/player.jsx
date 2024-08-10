import React from 'react';
import ReactPlayer from 'react-player/youtube';
import { Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Player({ movie }) {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate('/payment');
  };

  return (

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '5vh', justifyContent: 'center' }}>
    <Typography variant="h4" component="h1" gutterBottom>
      {movie ? movie.name : 'Movie Title'}
    </Typography>
      <div style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)', marginBottom: '20px', width: '50%', height: '60vh'}}>
        <ReactPlayer
          url= 'https://www.youtube.com/watch?v=PK_EJ3DyiiA&t=4s'
          controls
          width="100%"
          height="100%"
          style={{ borderRadius: '15px' }}
        />
      </div>
      <Box textAlign="center" maxWidth="640px">
        <Typography variant="body1" color="textSecondary" paragraph>
          This is a brief description of the movie. It provides an overview of the storyline, key characters, and important themes.
        </Typography>
        <Button variant="contained" color="primary" onClick={handleBuyNow}>
          Buy Now
        </Button>
      </Box>
    </div>
  );
}
