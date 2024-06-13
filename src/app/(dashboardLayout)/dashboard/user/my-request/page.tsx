"use client";
import {
  useDeleteSingleTripMutation,
  useGetTripQuery,
} from "@/redux/api/tripApi";
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDebounced } from "@/redux/hooks";
import { toast } from "sonner";
import EditIcon from "@mui/icons-material/Edit";
import Link from "next/link";
import {
  useChangeUserStatusMutation,
  useGetAllUsersQuery,
} from "@/redux/api/userApi";
import { useDeleteRequestMutation, useGetMyTripRequestQuery } from "@/redux/api/tripRequestApi";

const MyTripRequests = () => {
  const query: Record<string, any> = {};
  const [searchTerm, setSearchTerm] = useState<string>("");


  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["searchTerm"] = searchTerm;
  }

  const [deleteRequest] = useDeleteRequestMutation();
  const { data, isLoading } = useGetMyTripRequestQuery({});

  const handleDelete = async (id: string) => {

    try {
      const res = await deleteRequest(id).unwrap();

      if (res?.id) {
        toast.success("Trip deleted successfully!!!");
      }
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const columns: GridColDef[] = [
    {
      field: "destination",
      headerName: "Destination",
      flex: 1,

      renderCell: ({ row }) => {
        return (
          <Box>
            <Typography>{row?.trip?.destination}</Typography>
          </Box>
        );
      },
    },
    {
      field: "startDate",
      headerName: "Start Date",
      flex: 1,

      renderCell: ({ row }) => {
        return (
          <Box>
            <Typography>{row?.trip?.startDate}</Typography>
          </Box>
        );
      },
    },
    { field: "status", headerName: "Status", flex: 1 },

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
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <TextField
          onChange={(e) => setSearchTerm(e.target.value)}
          size="small"
          placeholder="search requests"
        />
      </Stack>
      {!isLoading ? (
        <Box my={2} sx={{ maxWidth: "95%" }}>
          {data && (
            <DataGrid rows={data} columns={columns} hideFooterPagination />
          )}
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

export default MyTripRequests;
