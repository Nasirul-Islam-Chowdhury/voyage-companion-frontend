"use client";


import { getUserInfo } from "@/services/auth.services";
import { TUserRole } from "@/types";
import { drawerItems } from "@/utils/drawerItems";
import { Box, CircularProgress, List, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import SidebarItems from "./SidebarItems";
import { useGetUserProfileQuery } from "@/redux/api/userApi";


const Sidebar = () => {
const [userRole, setUserRole] = useState("");

  React.useEffect(()=>{
    const getUserData = async()=>{
      const userData = await getUserInfo();
      setUserRole(userData?.role);
    }
    getUserData();
  },[]);

  const drawer = (
    <div>
      <List>
        {
      
        drawerItems(userRole as TUserRole).map((item, index) => (
          <SidebarItems key={index} item={item} />
        ))
        
        
        
        }
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