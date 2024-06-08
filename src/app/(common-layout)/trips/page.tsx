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

const TripPage = () => {
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
      >


        <TextField
          onChange={(e) => setSearchTerm(e.target.value)}
          fullWidth
          sx={{ width: "60%", mt:3 }}
          
          placeholder="Search for trips"
        />

        <TravelPosts travelPosts={data} />

      </Stack>


    </Container>
  );
};

export default TripPage;
