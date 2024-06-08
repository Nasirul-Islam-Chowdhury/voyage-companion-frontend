"use client"
import VCDatePicker from "@/components/Forms/VCDatePicker";
import VCForm from "@/components/Forms/VCForm";
import VCInput from "@/components/Forms/VCInput";
import VCMultipleFileUploader from "@/components/Forms/VCMultipleFIleUploader";
import { passwordChangeValidationSchema } from "@/validationSchema/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";


const ChangePassword = () => {

  
  const handleSubmit = (data:FieldValues) => {
    console.log(' Info:', data);
  };

  return (
    <Box>
     <Box 
      sx={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
        backgroundColor: '#fff',
      }}
    >
      <Typography variant="h5" component="h1" textAlign="center" mb={3}>
       Change Password
      </Typography>
      <VCForm
        onSubmit={handleSubmit}
        resolver={zodResolver(passwordChangeValidationSchema)}
        defaultValues={{
          destination: "",
          description: "",
          dates: "",
          travelType: "",
          photos: null,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <VCInput name="currentPassword" label="Current Password" type="text" fullWidth />
          </Grid>
         
          <Grid item xs={12}>
            <VCInput name="newPassword" label="New Password" type="text" fullWidth />
          </Grid>
         
          <Grid item xs={12}>
            <VCInput name="confirmPassword" label="Confirm Password" type="text" fullWidth />
          </Grid>
         
         
          <Grid item xs={12}>
            <Button
              variant="contained"
              sx={{ 
                margin: "10px 0px",
                padding: '10px 0',
              }}
              fullWidth
              type="submit"
            >
              Submit the travel information for listing
            </Button>
          </Grid>
        </Grid>
      </VCForm>
    </Box>
    </Box>
  );
};




export default ChangePassword