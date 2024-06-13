import React from 'react';
import { Grid, Typography, Card, CardMedia, CardContent, Box } from '@mui/material';
import { styled } from '@mui/system';
import TravelPosts from './TravelPosts';
import { useGetTripQuery } from '@/redux/api/tripApi';





const FeaturedDestinations = () => {
  const { data } = useGetTripQuery({});
  const travelData = data?.slice(0, 3)
  return (
    <Box sx={{ marginTop: 4 }}>
       <Typography variant="h4" gutterBottom>  Featured Destinations</Typography>
       <TravelPosts travelPosts={travelData} />
    </Box>
  );
};

export default FeaturedDestinations;
