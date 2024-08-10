import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Payment({ movie }) {
  const navigate = useNavigate();

  const handlePaymentSuccess = () => {
    navigate('/player');
  };

  return (
    <Box textAlign="center" mt={9}>
      <Typography variant="h4" gutterBottom>
        Complete Your Purchase for {movie ? movie.name : 'Movie'}
      </Typography>
      <Button variant="contained" color="primary" onClick={handlePaymentSuccess}>
        Pay Now
      </Button>
    </Box>
  );
}
