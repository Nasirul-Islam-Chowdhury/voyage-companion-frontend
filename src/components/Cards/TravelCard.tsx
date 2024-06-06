import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const TravelCard = ({post}:{post:any}) => {
  return (
    <Grid item xs={12} sm={6} md={4} key={post.id}>
            <Card>
              <CardMedia
                component="img"
               sx={{
                height:"240px"
               }}
                image={post.photo}
                alt={post.destination}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {post.destination}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Start Dates: {post.startDate}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Budget: ${post.budget}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                destination: {post.destination}
                </Typography>
              </CardContent>
              <CardContent>
                <Link href={`/trips/${post.id}`} passHref>
                  <Button size="small" color="primary">
                    View Details
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
  )
}

export default TravelCard