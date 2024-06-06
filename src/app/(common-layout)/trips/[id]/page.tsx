"use client"
import * as React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from '@mui/material';
import {
  Place as PlaceIcon,
  CalendarToday as CalendarTodayIcon,
  Info as InfoIcon,
  Flight as FlightIcon,
} from '@mui/icons-material';
import Link from 'next/link';

function TravelDetailsPage() {
  const photos = [
    'https://via.placeholder.com/600x400',
    'https://via.placeholder.com/600x400',
    'https://via.placeholder.com/600x400',
  ];

  const itinerary = [
    'Day 1: Arrival and city tour',
    'Day 2: Visit historical landmarks',
    'Day 3: Free day for personal activities',
    'Day 4: Departure',
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={4}>
        {/* Travel Information */}
        <Grid item xs={12} md={8}>
          <Typography variant="h4" component="h1" gutterBottom>
            Exotic Trip to Bali
          </Typography>
          <Box sx={{ mb: 4 }}>
            <Grid container spacing={2}>
              {photos.map((photo, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="200"
                      image={photo}
                      alt={`Photo ${index + 1}`}
                    />
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Typography variant="h6" gutterBottom>
            <InfoIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
            Detailed Description
          </Typography>
          <Typography paragraph>
            Discover the beauty of Bali with this 4-day trip that covers the best of the island's
            beaches, culture, and attractions. You'll enjoy guided tours, comfortable
            accommodations, and free time to explore at your own pace.
          </Typography>

          <Typography variant="h6" gutterBottom>
            <InfoIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
            Itinerary
          </Typography>
          <Box component="ul" sx={{ pl: 4 }}>
            {itinerary.map((item, index) => (
              <Typography component="li" key={index} paragraph>
                {item}
              </Typography>
            ))}
          </Box>

          <Typography variant="h6" gutterBottom>
            <CalendarTodayIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
            Travel Dates
          </Typography>
          <Typography paragraph>June 10, 2024 - June 14, 2024</Typography>

          <Typography variant="h6" gutterBottom>
            <FlightIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
            Travel Type
          </Typography>
          <Typography paragraph>Adventure, Culture</Typography>

          <Typography variant="h6" gutterBottom>
            <PlaceIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
            Location
          </Typography>
          <Typography paragraph>Bali, Indonesia</Typography>
        </Grid>

        {/* Travel Request Button */}
        <Grid item xs={12} md={4}>
          <Box sx={{ position: 'sticky', top: 16 }}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Ready to Join?
                </Typography>
                <Typography paragraph>
                  Click the button below to initiate your travel request and secure your spot for
                  this amazing trip!
                </Typography>
              </CardContent>
              <CardActions>
                <Link href={`/travel-request/${"dsf"}`}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  
                >
                  Request to Join
                </Button>
                  </Link>
              </CardActions>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default TravelDetailsPage;
