"use client";


import { getUserInfo } from "@/services/auth.services";
import { TUserRole } from "@/types";
import { drawerItems } from "@/utils/drawerItems";
import { Box, List, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import SidebarItems from "./SidebarItems";


const Sidebar = () => {
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const fetchUserInfo = async () => {
      const userInfo = await getUserInfo();
      if (userInfo) {  
        setUserRole(userInfo.role);
      }
    };

    fetchUserInfo();
  }, []);
  


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