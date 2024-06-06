import * as React from 'react';
import { Box, Container, Grid, Link, Typography, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

function Footer() {
  return (
    <Box component="footer" sx={{ py: 6, backgroundColor: 'primary.main', color: 'white' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Contact Information */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>Contact Information</Typography>
            <Typography>Email: contact@example.com</Typography>
            <Typography>Phone: +1 234 567 890</Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton color="inherit" href="https://facebook.com">
                <Facebook />
              </IconButton>
              <IconButton color="inherit" href="https://twitter.com">
                <Twitter />
              </IconButton>
              <IconButton color="inherit" href="https://instagram.com">
                <Instagram />
              </IconButton>
              <IconButton color="inherit" href="https://linkedin.com">
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>

          {/* Additional Links */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>Additional Links</Typography>
            <Link href="/terms" color="inherit" underline="hover">
              Terms of Use
            </Link>
            <br />
            <Link href="/privacy" color="inherit" underline="hover">
              Privacy Policy
            </Link>
            <br />
            <Link href="/about" color="inherit" underline="hover">
              About Us
            </Link>
            <br />
            <Link href="/contact" color="inherit" underline="hover">
              Contact Us
            </Link>
          </Grid>

          {/* Copyright Information */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>Copyright Information</Typography>
            <Typography color={"ActiveCaption"} >© {new Date().getFullYear()} Your Company. All rights reserved.</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
