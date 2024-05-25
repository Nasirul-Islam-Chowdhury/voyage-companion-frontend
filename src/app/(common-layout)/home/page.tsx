"use client"
import FeaturedDestinations from "@/components/TravelPosts/FeaturedDestinations";
import TravelPosts from "@/components/TravelPosts/TravelPosts";
import TravelTipsGallery from "@/components/TravelPosts/TravelTipsGallery";
import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const HomePage = () => {
  return (
    <Container>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        gap={5}
        pb={15}
        bgcolor={"ButtonShadow"}
      >
        <Typography
          fontSize={"2.5rem"}
          pt={10}
          textAlign={"center"}
          variant="h1"
        >
          Find Your Perfect Travel Buddy!
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button color="primary" variant="contained">
            Share Your Trip
          </Button>
        </Box>

        <TextField
          fullWidth
          sx={{ width: "60%" }}
          placeholder="Search for trips"
        />

        <TravelPosts />
        <Button color="primary" variant="contained">
          See More
        </Button>
      </Stack>
      <Typography variant="h4">Health Tips</Typography>
      <Typography variant="caption">
        Note: Hover on cards to see details
      </Typography>
      <Box mb={10} mt={2}>
        <TravelTipsGallery />
        <FeaturedDestinations/>
      </Box>



    </Container>
  );
};

export default HomePage;
