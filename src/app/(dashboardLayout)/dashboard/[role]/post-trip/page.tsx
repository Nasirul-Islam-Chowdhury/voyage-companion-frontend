"use client"
import VCDatePicker from "@/components/Forms/VCDatePicker";
import VCForm from "@/components/Forms/VCForm";
import VCInput from "@/components/Forms/VCInput";
import VCMultipleFileUploader from "@/components/Forms/VCMultipleFIleUploader";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";


const CreateTrip = () => {
  const validationSchema = z.object({
    destination: z.string().nonempty("Destination is required"),
    description: z.string().nonempty("Detailed description is required"),
    dates: z.string().nonempty("Travel dates are required"),
    travelType: z.string().nonempty("Travel type is required"),
    photos: z.any().optional(),
  });
  
  const handleTravelInfoSubmit = (data:FieldValues) => {
    console.log('Travel Info:', data);
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
        Submit Travel Information
      </Typography>
      <VCForm
        onSubmit={handleTravelInfoSubmit}
        resolver={zodResolver(validationSchema)}
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
            <VCInput name="destination" label="Destination" type="text" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <VCInput 
              name="description" 
              label="Detailed Description" 
              type="text" 
              fullWidth 
              multiline={true}
              rows={4} 
            />
          </Grid>
          <Grid item xs={12}>
            <VCInput name="travelType" label="Travel Type" type="text" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <VCDatePicker label="Start Date" name="startDate"/>
          </Grid>
          <Grid item xs={12}>
            <VCDatePicker label="End Date" name="endDate"/>
          </Grid>
          <Grid item xs={12}>
          <VCMultipleFileUploader
          name="photos"
          label="Tourist Place Images"
        />
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

export default CreateTrip;
