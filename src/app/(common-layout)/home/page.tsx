"use client";
import FeaturedDestinations from "@/components/TravelPosts/FeaturedDestinations";
import TravelPosts from "@/components/TravelPosts/TravelPosts";
import TravelTipsGallery from "@/components/TravelPosts/TravelTipsGallery";
import { useGetTripQuery } from "@/redux/api/tripApi";
import { useGetUserProfileQuery } from "@/redux/api/userApi";
import { useDebounced } from "@/redux/hooks";

import {
  Box,
  Button,
  Container,
  Grid,
  Skeleton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
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
  const { data, isLoading } = useGetTripQuery({ ...query });
  const travelPostsData = data?.slice(0, 6) as any;
  const { data: profileInfo } = useGetUserProfileQuery(undefined);

  return (
    <Container >
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        gap={5}
        pb={15}
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
        <Link  href={`/dashboard/${profileInfo?.user?.role}/post-trip`}>
        <Button  color="primary" variant="contained">
            Share Your Trip
          </Button>
        </Link>
        </Box>

        <TextField
          onChange={(e) => setSearchTerm(e.target.value)}
          fullWidth
          sx={{ width: "60%" }}
          placeholder="Search for trips"
        />
    {isLoading &&
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4}>
            {Array.from({ length: 6 }, (_, index) => (
              <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
                <Box>
                  <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                  <Skeleton variant="circular" width={40} height={40} />
                  <Skeleton variant="rectangular" width={210} height={60} />
                  <Skeleton variant="rounded" width={210} height={60} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      }
        <TravelPosts travelPosts={travelPostsData} />
        <Link href={"/trips"}>
          <Button color="primary" variant="contained">
            See More
          </Button>
        </Link>
      </Stack>
      <Typography variant="h4">Health Tips</Typography>
      <Typography variant="caption">
        Note: Hover on cards to see details
      </Typography>
      <Box mb={10} mt={2} >
        <TravelTipsGallery />
        <FeaturedDestinations />
      </Box>
    </Container>
  );
};

export default HomePage;
