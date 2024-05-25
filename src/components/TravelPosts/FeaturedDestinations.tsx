import React from 'react';
import { Grid, Typography, Card, CardMedia, CardContent, Box } from '@mui/material';
import { styled } from '@mui/system';

const destinations = [
  {
    id: 1,
    name: 'Paris, France',
    description: 'The City of Light, known for The City of Light, known for its art, fashion, gastronomy, and culture.',
    image: 'https://source.unsplash.com/featured/?paris',
  },
  {
    id: 2,
    name: 'Kyoto, Japan',
    description: 'Famous for its classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines, and traditional wooden houses.',
    image: 'https://source.unsplash.com/featured/?kyoto',
  },
  {
    id: 3,
    name: 'New York, USA',
    description: 'The city that never sleeps, known for its iconic landmarks like Times Square, Central Park, and the Statue of Liberty.',
    image: 'https://source.unsplash.com/featured/?newyork',
  },
  // Add more destinations as needed
];

const DestinationCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  margin: 'auto',
  borderRadius: theme.shape.borderRadius,

  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const FeaturedDestinations = () => {
  return (
    <Box sx={{ marginTop: 4 }}>
       <Typography variant="h4" gutterBottom>  Featured Destinations</Typography>
      <Grid container spacing={3}>
        {destinations.map((destination) => (
          <Grid item xs={12} sm={6} md={4} key={destination.id}>
            <DestinationCard>
              <CardMedia
                component="img"
                sx={{height:"240px"}}
                image={destination.image}
                alt={destination.name}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {destination.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {destination.description}
                </Typography>
              </CardContent>
            </DestinationCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedDestinations;
