
import DashboardDrawer from "@/components/Dashboard/DashboardDrawer/DashboardDrawer";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return <DashboardDrawer>{children}</DashboardDrawer>;
};

export default layout;