import React from "react";
import TravelCard from "../Cards/TravelCard";
import { Container, Grid } from "@mui/material";
import { travelPosts } from "@/data";

const TravelPosts = ({travelPosts}:{travelPosts:any}) => {
  return (
    <Container>
      <Grid container spacing={2}>
        {travelPosts?.map((post:any) => (
          <TravelCard key={post?.id} post={post} />
        ))}
      </Grid>
    </Container>
  );
};

export default TravelPosts;
