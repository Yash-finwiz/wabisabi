import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';

function ActionAreaCard({ name, image, onClick }) {
  return (
    <Card sx={{ maxWidth: 345 }} onClick={onClick}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This is a description of {name}.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default function CardGrid({ setSelectedMovie }) {
  const navigate = useNavigate();

  const cards = [
    { name: 'Movie 1', image: 'https://images.pexels.com/photos/275977/pexels-photo-275977.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Movie 2', image: 'https://images.pexels.com/photos/275977/pexels-photo-275977.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Movie 3', image: 'https://images.pexels.com/photos/275977/pexels-photo-275977.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Movie 4', image: 'https://images.pexels.com/photos/275977/pexels-photo-275977.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Movie 5', image: 'https://images.pexels.com/photos/275977/pexels-photo-275977.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Movie 6', image: 'https://images.pexels.com/photos/275977/pexels-photo-275977.jpeg?auto=compress&cs=tinysrgb&w=600' },
  ];

  const handleCardClick = (card) => {
    setSelectedMovie(card);
    navigate('/player');
  };

  return (
    <Container maxWidth="lg" sx={{ paddingLeft: '24px' }}>
      <Grid container spacing={3} justifyContent="center">
        {cards.map((card, index) => (
          <Grid item xs={12} sm={4} md={4} lg={4} key={index}>
            <ActionAreaCard
              name={card.name}
              image={card.image}
              onClick={() => handleCardClick(card)}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
