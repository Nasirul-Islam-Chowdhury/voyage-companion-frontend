"use client";


import { getUserInfo } from "@/services/auth.services";
import { TUserRole } from "@/types";
import { drawerItems } from "@/utils/drawerItems";
import { Box, List, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import SidebarItems from "./SidebarItems";
import { useGetUserProfileQuery } from "@/redux/api/userApi";


const Sidebar = () => {
  const  {data} = useGetUserProfileQuery(undefined);
  console.log(data?.user?.role);
  const userRole =  data?.user?.role;


  


  const drawer = (
    <div>
      <List>
        {drawerItems(userRole as TUserRole).map((item, index) => (
          <SidebarItems key={index} item={item} />
        ))}
      </List>
    </div>
  );
  return (
    <Box>
      {drawer}
    </Box>
  );
};

export default Sidebar;