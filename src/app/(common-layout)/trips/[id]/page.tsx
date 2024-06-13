"use client";
import * as React from "react";
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
} from "@mui/material";
import {
  Place as PlaceIcon,
  CalendarToday as CalendarTodayIcon,
  Info as InfoIcon,
  Flight as FlightIcon,
} from "@mui/icons-material";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useGetSingleTripQuery } from "@/redux/api/tripApi";
import Loading from "@/loading";
import { useGetUserProfileQuery } from "@/redux/api/userApi";

function TravelDetailsPage() {
  const { id } = useParams();
  const { data: userProfile } = useGetUserProfileQuery(undefined);
  const { data, isLoading } = useGetSingleTripQuery(id);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Box sx={{ mb: 4 }}>
            <Grid container spacing={2}>
              {data?.photos.map((photo: string, index: number) => (
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
            <InfoIcon sx={{ verticalAlign: "middle", mr: 1 }} />
            Detailed Description
          </Typography>
          <Typography paragraph>{data?.description}</Typography>

          <Typography variant="h6" gutterBottom>
            <InfoIcon sx={{ verticalAlign: "middle", mr: 1 }} />
            Itinerary
          </Typography>
          <Box component="ul" sx={{ pl: 4 }}>
            {data?.activities?.map((item: string, index: number) => (
              <Typography component="li" key={index} paragraph>
                {item}
              </Typography>
            ))}
          </Box>

          <Typography variant="h6" gutterBottom>
            <CalendarTodayIcon sx={{ verticalAlign: "middle", mr: 1 }} />
            Travel Dates
          </Typography>
          <Typography paragraph>
            {data?.startDate} - {data?.endDate}
          </Typography>

          <Typography variant="h6" gutterBottom>
            <FlightIcon sx={{ verticalAlign: "middle", mr: 1 }} />
            Travel Type
          </Typography>
          <Typography paragraph>{data?.travelType}</Typography>

          <Typography variant="h6" gutterBottom>
            <PlaceIcon sx={{ verticalAlign: "middle", mr: 1 }} />
            Location
          </Typography>
          <Typography paragraph>{data?.destination}</Typography>
        </Grid>

        {/* Travel Request Button */}
        <Grid item xs={12} md={4}>
          <Box sx={{ position: "sticky", top: 16 }}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Ready to Join?
                </Typography>
                <Typography paragraph>
                  Click the button below to initiate your travel request and
                  secure your spot for this amazing trip!
                </Typography>
              </CardContent>
              <CardActions>
                <Link
                  href={`/dashboard/${userProfile?.user?.role.toLowerCase()}/travel-request/${data?.id}`}
                >
                  <Button variant="contained" color="primary" fullWidth>
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
