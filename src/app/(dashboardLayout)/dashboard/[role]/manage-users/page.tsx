"use client";
import {
  useDeleteSingleTripMutation,
  useGetTripQuery,
} from "@/redux/api/tripApi";
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
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
  // console.log(searchTerm);

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["searchTerm"] = searchTerm;
  }

  const { data, isLoading } = useGetAllUsersQuery({ ...query });
  const [changeStatus] = useChangeUserStatusMutation();
  console.log(data);
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

  // {
  //   id: '67e8de2e-4d7a-4d46-8317-0321dcb12592',
  //   email: 'n@gmail.com',
  //   role: 'USER',
  //   status: 'ACTIVE',
  //   createdAt: '2024-06-07T16:04:55.841Z',
  //   updatedAt: '2024-06-07T16:04:55.841Z'
  // },


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
            <Link href={`/dashboard/admin/trips/edit/${row.id}`}>
              <IconButton aria-label="delete">
                <EditIcon />
              </IconButton>
            </Link>
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
          placeholder="search doctors"
        />
      </Stack>
      {!isLoading ? (
        <Box my={2}>
          <DataGrid rows={data} columns={columns} />
        </Box>
      ) : (
        <h1>Loading.....</h1>
      )}
    </Box>
  );
};

export default ManageUsers;


