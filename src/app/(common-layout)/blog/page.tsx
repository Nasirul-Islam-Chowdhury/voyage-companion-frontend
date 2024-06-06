import * as React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from '@mui/material';
import {
  AccessTime as AccessTimeIcon,
  Person as PersonIcon,
} from '@mui/icons-material';

const featuredPost = {
  title: 'Exploring the Wonders of Bali',
  date: 'June 5, 2024',
  description: 'Join us as we explore the beautiful island of Bali, experiencing its rich culture, stunning landscapes, and vibrant nightlife.',
  image: 'https://via.placeholder.com/800x400',
  author: 'Jane Doe',
};

const posts = [
  {
    title: 'Top 10 Beaches in the World',
    date: 'May 10, 2024',
    description: 'Discover the top 10 beaches you must visit in your lifetime.',
    image: 'https://via.placeholder.com/400x200',
    author: 'John Smith',
  },
  {
    title: 'A Culinary Journey Through Italy',
    date: 'April 22, 2024',
    description: 'Explore the rich culinary traditions of Italy, from pasta to gelato.',
    image: 'https://via.placeholder.com/400x200',
    author: 'Maria Rossi',
  },
  // Add more posts as needed
];

function BlogPage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Travel Buddy Blog
      </Typography>

      {/* Featured Post */}
      <Card sx={{ mb: 4 }}>
        <CardMedia
          component="img"
          height="400"
          image={featuredPost.image}
          alt={featuredPost.title}
        />
        <CardContent>
          <Typography variant="h5" component="h2">
            {featuredPost.title}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', my: 1 }}>
            <AccessTimeIcon sx={{ mr: 1 }} />
            <Typography variant="body2" color="text.secondary">
              {featuredPost.date}
            </Typography>
            <PersonIcon sx={{ ml: 2, mr: 1 }} />
            <Typography variant="body2" color="text.secondary">
              {featuredPost.author}
            </Typography>
          </Box>
          <Typography variant="body1" paragraph>
            {featuredPost.description}
          </Typography>
          <Button variant="contained" color="primary">
            Read More
          </Button>
        </CardContent>
      </Card>

      {/* Blog Posts */}
      <Grid container spacing={4}>
        {posts.map((post, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={post.image}
                alt={post.title}
              />
              <CardContent>
                <Typography variant="h6" component="h3">
                  {post.title}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', my: 1 }}>
                  <AccessTimeIcon sx={{ mr: 1 }} />
                  <Typography variant="body2" color="text.secondary">
                    {post.date}
                  </Typography>
                  <PersonIcon sx={{ ml: 2, mr: 1 }} />
                  <Typography variant="body2" color="text.secondary">
                    {post.author}
                  </Typography>
                </Box>
                <Typography variant="body2" paragraph>
                  {post.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Read More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default BlogPage;
