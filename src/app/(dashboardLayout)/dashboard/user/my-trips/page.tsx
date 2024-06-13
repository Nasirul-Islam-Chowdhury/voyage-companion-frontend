"use client";
import {
  useDeleteSingleTripMutation,
  useGetMyTripsQuery,
  useGetTripQuery,
} from "@/redux/api/tripApi";
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDebounced } from "@/redux/hooks";
import { toast } from "sonner";
import EditIcon from "@mui/icons-material/Edit";
import Link from "next/link";

const MyTrips = () => {
  const [deleteSingleTrip] = useDeleteSingleTripMutation();
  const { data, isLoading } = useGetMyTripsQuery(undefined);

  const handleDelete = async (id: string) => {
    try {
      const res = await deleteSingleTrip(id).unwrap();

      if (res?.id) {
        toast.success("Trip deleted successfully!!!");
      }
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const columns: GridColDef[] = [
    { field: "destination", headerName: "Destination", flex: 1 },
    { field: "startDate", headerName: "Start Date", flex: 1 },
    { field: "endDate", headerName: "End Date", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box>
            <IconButton
              onClick={() => handleDelete(row.id)}
              aria-label="delete"
            >
              <DeleteIcon sx={{ color: "red" }} />
            </IconButton>
            {/* <Link href={`/dashboard/admin/trips/edit/${row.id}`}>
              <IconButton aria-label="delete">
                <EditIcon />
              </IconButton>
            </Link> */}
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

export default MyTrips;
