"use client";
import VCDatePicker from "@/components/Forms/VCDatePicker";
import { VCFileUploader } from "@/components/Forms/VCFileUpload";
import VCForm from "@/components/Forms/VCForm";
import VCInput from "@/components/Forms/VCInput";
import { usePostTripMutation } from "@/redux/api/tripApi";
import { dateFormatter } from "@/utils/dateFormatter";
import { photoUpload } from "@/utils/photoUpload";
import { createTripValidationSchema } from "@/validationSchema/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoadingButton } from "@mui/lab";
import { Box, Button, Grid, Typography } from "@mui/material";
import dayjs from "dayjs";

import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const CreateTrip = () => {
  const [error, setError] = useState("");
  const [postTrip] = usePostTripMutation();

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleTravelInfoSubmit = async (data: FieldValues) => {
    try {
      setLoading(true);
      const photos = [];
      data.startDate = dateFormatter(data.startDate);
      data.endDate = dateFormatter(data.endDate);
      data.activities = ["maramari kormu"];
      data.budget = Number(data.budget);
      if (data.file) {
        const photo = await photoUpload(data.file);
        photos.push(photo);
        data.photos = photos;
      }
      const { file, ...restData } = data;
      const res = await postTrip(restData);
      if (res?.data) {
        setLoading(false);
        toast.success("Trips Created Successfully");
        return router.push("/trips");
      } else {
        setLoading(false);
        setError("All Field is required without Place PHoto");
      }
    } catch (error: any) {
      setLoading(false);
      setError("All Field is required without Place PHoto");
    }
    setLoading(false);
  };

  return (
    <Box>
      <Box
        sx={{
          maxWidth: "600px",
          margin: "0 auto",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
          backgroundColor: "#fff",
        }}
      >
        <Typography variant="h5" component="h1" textAlign="center" mb={3}>
          Submit Travel Information
        </Typography>
        <VCForm
          resolver={zodResolver(createTripValidationSchema)}
          onSubmit={handleTravelInfoSubmit}

        >
          {error && (
            <Box>
              <Typography
                sx={{
                  backgroundColor: "red",
                  padding: "1px",
                  borderRadius: "2px",
                  color: "white",
                  marginTop: "5px",
                }}
              >
                {error}
              </Typography>
            </Box>
          )}

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <VCInput
                name="destination"
                label="Destination"
                type="text"
                fullWidth
              />
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
              <VCInput
                name="travelType"
                label="Travel Type"
                type="text"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <VCInput
                name="budget"
                label="Travel Budget"
                type="number"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <VCDatePicker label="Start Date" name="startDate" />
            </Grid>
            <Grid item xs={12}>
              <VCDatePicker  label="End Date" name="endDate" />
            </Grid>
            <Grid item xs={12}>
              <VCFileUploader label="Place Photo" name="file" />
            </Grid>

            <Grid item xs={12}>
              {loading ? (
                <LoadingButton fullWidth loading variant="outlined">
                  Submit
                </LoadingButton>
              ) : (
                <Button
                  variant="contained"
                  sx={{
                    margin: "10px 0px",
                    padding: "10px 0",
                  }}
                  fullWidth
                  type="submit"
                >
                  Submit the travel information for listing
                </Button>
              )}
            </Grid>
          </Grid>
        </VCForm>
      </Box>
    </Box>
  );
};

export default CreateTrip;
