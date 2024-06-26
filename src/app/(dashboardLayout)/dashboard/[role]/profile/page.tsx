"use client";
import VCForm from "@/components/Forms/VCForm";
import VCInput from "@/components/Forms/VCInput";
import Loading from "@/loading";
import {
  useGetUserProfileQuery,
  useUpdateUserProfileMutation,
} from "@/redux/api/userApi";
import { getUserInfo } from "@/services/auth.services";
import { profileValidationSchema } from "@/validationSchema/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";

import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const ProfilePage = () => {
  const { data: profileInfo, isLoading } = useGetUserProfileQuery(undefined);
  const [updateUserProfile] = useUpdateUserProfileMutation();

  if (isLoading) {
    return <Loading />;
  }



  const handleSubmit = async (data: FieldValues) => {

    try {
      data.email = profileInfo?.user?.email;
      data.username = data?.username;
      data.profile.age = Number(data.profile.age);

      const res = await updateUserProfile(data);
      if (res.data) {
        toast.success("Profile updated successfully");
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <Box>
      <Typography variant="h5" component="h1" textAlign="center" mb={3}>
        Your Profile Information
      </Typography>
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
        <VCForm
          onSubmit={handleSubmit}
          resolver={zodResolver(profileValidationSchema)}
          defaultValues={{
            email: profileInfo?.user?.email,
            username: profileInfo?.user?.username,
            profile: {
              bio: profileInfo?.bio,
              age: profileInfo?.age,
              contactNumber: profileInfo?.contactNumber,
            },
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <label>Username</label>
              <VCInput
                name="username"
                type="text"
                defaultValue={profileInfo?.user?.username}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <label>Email</label>
              <VCInput
                name="email"
                disabled={true}
                type="text"
                fullWidth
                defaultValue={profileInfo?.user?.email}
              />
            </Grid>
            <Grid item xs={12}>
              <label>Bio</label>
              <VCInput
                name="profile.bio"
                type="text"
                fullWidth
                defaultValue={profileInfo?.bio}
              />
            </Grid>
            <Grid item xs={12}>
              <label>Age</label>
              <VCInput
                name="profile.age"
                type="number"
                fullWidth
                defaultValue={profileInfo?.age}
              />
            </Grid>
            <Grid item xs={12}>
              <label>Contact Number</label>
              <VCInput
                name="profile.contactNumber"
                type="number"
                fullWidth
                defaultValue={profileInfo?.contactNumber}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                variant="contained"
                sx={{
                  margin: "10px 0px",
                  padding: "10px 0",
                }}
                fullWidth
                type="submit"
              >
                Update
              </Button>
            </Grid>
          </Grid>
        </VCForm>
      </Box>
    </Box>
  );
};

export default ProfilePage;
