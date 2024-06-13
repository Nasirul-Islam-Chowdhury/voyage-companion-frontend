"use client";

import {
  Box,
  Button,
  Chip,
  CircularProgress,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import { useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDebounced } from "@/redux/hooks";
import { toast } from "sonner";
import EditIcon from "@mui/icons-material/Edit";
import Link from "next/link";
import {
  useGetMyPostedTripRequestQuery,
  useGetMyTripRequestQuery,
  useRespondToRequestMutation,
} from "@/redux/api/tripRequestApi";

const MyPostedTripsRequests = () => {
  const { data, isLoading } = useGetMyPostedTripRequestQuery(undefined);
  const [respondToRequest] =useRespondToRequestMutation();
  const handleRequest = async ( id: string, status: string ) => {

    try {
     const res = await respondToRequest({status,id})

    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const columns: GridColDef[] = [
    {
      field: "username",
      headerName: "User Name",
      flex: 1,

      renderCell: ({ row }) => row.trip.destination,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,

      renderCell: ({ row }) => row.user.email,
    },
    {
      field: "destination",
      headerName: "Destination",
      flex: 1,

      renderCell: ({ row }) => row.trip.destination,
    },
    {
      field: "budget",
      headerName: "Budget",
      flex: 1,

      renderCell: ({ row }) => row.trip.budget,
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        console.log(row)
        return (
          <Box>
            {row.status === "PENDING" ? (
             <Stack gap={2} direction={"row"} alignItems={"center"} justifyContent={"center"} mt={1}>
              <Chip
                label={"Accept"}
                onClick={() => handleRequest(row.id, "APPROVED")}
                deleteIcon={<DoneIcon />}
              />
              <Chip
                label={"Reject"}
                onClick={() => handleRequest(row.id, "REJECTED")}
                deleteIcon={<DoneIcon />}
              /></Stack>



            ) : row.status === "APPROVED" ? (
              <Chip label="APPROVED" color="success" />
            ) : (
              <Chip label="REJECTED" color="primary" />
            )}
          </Box>
        );
      },
    },
  ];

  return (
    <Box>
      {!isLoading ? (
        <Box my={2} sx={{ maxWidth: "95%" }}>
          <DataGrid rows={data} columns={columns} />
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "70vh",
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
};

export default MyPostedTripsRequests;
