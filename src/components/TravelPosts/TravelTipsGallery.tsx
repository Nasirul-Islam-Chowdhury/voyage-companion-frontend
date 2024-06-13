"use client"
import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

const tipsData = [
  {
    id: 1,
    title: 'Pack Light',
    description: 'Always pack light to make your travel experience more enjoyable and hassle-free. Carry only essentials and versatile clothing items.',
    image: 'https://unsplash.com/photos/foggy-mountain-summit-1Z2niiBPg5A'
  },
  {
    id: 2,
    title: 'Stay Hydrated',
    description: 'Keep yourself hydrated, especially during long flights or hot weather. Carry a reusable water bottle.',
    image: 'https://unsplash.com/photos/foggy-mountain-summit-1Z2niiBPg5A'
  },
  {
    id: 3,
    title: 'Learn Basic Phrases',
    description: 'Learn a few basic phrases of the local language to make your travel smoother and show respect to the locals.',
    image: 'https://unsplash.com/photos/foggy-mountain-summit-1Z2niiBPg5A'
  },
  // Add more tips as needed
];

const TipBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '250px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
  '&:hover .overlay': {
    opacity: 1,
  },
}));

const Overlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: "#ffff",
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  opacity: 1,
  transition: 'opacity 0.3s ease-in-out',
  padding: theme.spacing(2),
  textAlign: 'center',
}));

const TravelTipsGallery = () => {
  return (
    <Grid container spacing={2} px={2}>
      {tipsData?.map(tip => (
        <Grid item xs={12} sm={6} md={4} key={tip.id}>
          <TipBox style={{ backgroundImage: `url(${tip.image})` }}>
            <Overlay className="overlay">
              <Typography variant="h5" component="div">
                {tip.title}
              </Typography>
              <Typography variant="body2" component="div" mt={1}>
                {tip.description}
              </Typography>
            </Overlay>
          </TipBox>
        </Grid>
      ))}
    </Grid>
  );
};

export default TravelTipsGallery;
