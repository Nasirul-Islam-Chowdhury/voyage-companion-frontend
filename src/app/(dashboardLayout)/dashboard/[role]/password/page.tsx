"use client";
import VCForm from "@/components/Forms/VCForm";
import VCInput from "@/components/Forms/VCInput";
import { useChangePasswordMutation } from "@/redux/api/userApi";
import { passwordChangeValidationSchema } from "@/validationSchema/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const ChangePassword = () => {
  const [error, setError] = useState("");
  const [changePassword] = useChangePasswordMutation();


  const handleSubmit = async (data: FieldValues) => {
    try {
      setError("")
      if (data.newPassword !== data.confirmPassword)
        return setError("Password did not matched");
      const res = await changePassword({
        oldPassword: data.oldPassword,
        newPassword: data.newPassword,
      });
  
      if (res?.data?.success)
        return toast.success("Password changed Successfully");
      return toast.error(res.data.message);
    } catch (error: any) {
      setError(error.message);
    }
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
                name="oldPassword"
                label="Current Password"
                type="text"
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <VCInput
                name="newPassword"
                label="New Password"
                type="text"
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <VCInput
                name="confirmPassword"
                label="Confirm Password"
                type="text"
                fullWidth
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
                Change Password
              </Button>
            </Grid>
          </Grid>
        </VCForm>
      </Box>
    </Box>
  );
};

export default ChangePassword;
