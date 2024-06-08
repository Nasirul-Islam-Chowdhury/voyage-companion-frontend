import Footer from "@/components/Footer";
import Navbar from "@/components/Header/Navbar";

import { Box } from "@mui/material";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voyage Companion",
  description: "Generated by create next app",
};

 function CommonLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{backgroundColor:"background.paper"}}>
      <Navbar />
     <Box sx={{minHeight:"70vh"}}>
     {children}
     </Box>
      <Footer/>
    </Box>
  );
}


export default CommonLayout