import React from "react";
import TravelCard from "../Cards/TravelCard";
import { Container, Grid } from "@mui/material";
import { travelPosts } from "@/data";

const TravelPosts = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        {travelPosts.slice(0, 10).map((post) => (
          <TravelCard post={post} />
        ))}
      </Grid>
    </Container>
  );
};

export default TravelPosts;
