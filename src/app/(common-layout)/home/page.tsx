"use client";
import FeaturedDestinations from "@/components/TravelPosts/FeaturedDestinations";
import TravelPosts from "@/components/TravelPosts/TravelPosts";
import TravelTipsGallery from "@/components/TravelPosts/TravelTipsGallery";
import { useGetTripQuery } from "@/redux/api/tripApi";
import { useDebounced } from "@/redux/hooks";
import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const HomePage = () => {
  const query: Record<string, any> = {};
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["searchTerm"] = searchTerm;
  }
  const { data } = useGetTripQuery({ ...query });
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
          onChange={(e) => setSearchTerm(e.target.value)}
          fullWidth
          sx={{ width: "60%" }}
          placeholder="Search for trips"
        />

        <TravelPosts travelPosts={data} />
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
        <FeaturedDestinations />
      </Box>
    </Container>
  );
};

export default HomePage;
