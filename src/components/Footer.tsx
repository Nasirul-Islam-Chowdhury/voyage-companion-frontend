"use client"

import React from 'react';
import { Box, Typography, Link, Container, Grid, useTheme } from '@mui/material';


const Footer = () => {
    const theme = useTheme() as any
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
       
       bgcolor:   theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Contact Information</Typography>
            <Typography>Email: contact@example.com</Typography>
            <Typography>Phone: (123) 456-7890</Typography>
            <Box mt={1}>
              <Link href="https://facebook.com" target="_blank" rel="noopener">
                Facebook
              </Link>
              <br />
              <Link href="https://twitter.com" target="_blank" rel="noopener">
                Twitter
              </Link>
              <br />
              <Link href="https://instagram.com" target="_blank" rel="noopener">
                Instagram
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Additional Links</Typography>
            <Link href="/terms" variant="body2">
              Terms of Use
            </Link>
            <br />
            <Link href="/privacy" variant="body2">
              Privacy Policy
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Copyright</Typography>
            <Typography>
              &copy; {new Date().getFullYear()} Your Company. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
