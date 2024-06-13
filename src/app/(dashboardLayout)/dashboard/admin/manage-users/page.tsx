"use client";
import {
  useDeleteSingleTripMutation,
  useGetTripQuery,
} from "@/redux/api/tripApi";
import { Box, Button, CircularProgress, IconButton, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDebounced } from "@/redux/hooks";
import { toast } from "sonner";
import EditIcon from "@mui/icons-material/Edit";
import Link from "next/link";
import { useChangeUserStatusMutation, useGetAllUsersQuery } from "@/redux/api/userApi";

const ManageUsers = () => {
  const query: Record<string, any> = {};
  const [searchTerm, setSearchTerm] = useState<string>("");


  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["searchTerm"] = searchTerm;
  }

  const { data, isLoading } = useGetAllUsersQuery({ ...query });
  const [changeStatus] = useChangeUserStatusMutation();

  const handleDelete = async (id: string, status: string) => {
    const args = {
      data:{status},
      id
    }
    try {
      const res = await changeStatus(args).unwrap();

      if (res?.id) {
        toast.success("Trip deleted successfully!!!");
      }
    } catch (err: any) {
      toast.error(err.message);
    }
  };




  const columns: GridColDef[] = [
    { field: "email", headerName: "Email", flex: 1 },
    { field: "status", headerName: "Status", flex: 1 },
    { field: "role", headerName: "User Role", flex: 1 },

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
              onClick={() => handleDelete(row.id, "BLOCKED")}
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
          placeholder="search users"
        />
      </Stack>
      {!isLoading ? (
        <Box my={2} sx={{maxWidth:"95%"}}>
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

export default ManageUsers;


