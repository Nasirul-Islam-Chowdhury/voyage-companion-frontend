"use client";

import VCForm from "@/components/Forms/VCForm";
import VCInput from "@/components/Forms/VCInput";
import Loading from "@/loading";
import { useGetSingleTripQuery } from "@/redux/api/tripApi";
import { useCreateRequestMutation } from "@/redux/api/tripRequestApi";
import {
  useChangePasswordMutation,
  useGetUserProfileQuery,
} from "@/redux/api/userApi";
import { passwordChangeValidationSchema, travelRequestValidationSchema } from "@/validationSchema/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoadingButton } from "@mui/lab";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const TravelRequest = () => {
  const { data: userProfile, isLoading,  } = useGetUserProfileQuery({}) as any;
  const { id } = useParams();
  const { data: tripData } = useGetSingleTripQuery(id);
  const [error, setError] = useState("");
  const [createRequest] = useCreateRequestMutation();
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

const handleSubmit = async (data: FieldValues) => {
  try {
    setError("");
    setLoading(true);
    const res = await createRequest(id).unwrap(); 

    if (res) {
      setLoading(false);
      toast.success("Travel Request Created Successfully");
      router.push("/dashboard/user/my-request")
    } else {
      throw new Error("Unknown error occurred");
    }
  } catch (error: any) {
    setLoading(false);
    if (error.data?.message) {
      setError(error.data.message); 
    } else {
      setError("Failed to create travel request");
    }
    toast.error(error.data?.message || "Failed to create travel request");
  }
};

  if (isLoading) {
    return <Loading />;
  }

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
          Submit Travel Request For
          <br />
          <span className="font-bold text-xl">{tripData?.destination}</span>
        </Typography>
        <VCForm
          onSubmit={handleSubmit}
          resolver={zodResolver(travelRequestValidationSchema)}
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
                  mb: 2,
                }}
              >
                {error}
              </Typography>
            </Box>
          )}

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <VCInput
                name="contactNumber"
                label="Contact Number"
                type="text"
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <VCInput name="age" label="Age" type="text" fullWidth />
            </Grid>

            <Grid item xs={12}>
              <VCInput
                defaultValue={userProfile?.user?.email || ""}
                name="email"
                type="text"
                fullWidth
                disabled
              />
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
                  Submit Request
                </Button>
              )}
            </Grid>
          </Grid>
        </VCForm>
      </Box>
    </Box>
  );
};

export default TravelRequest;
