"use client";


import { ThemeProvider } from "@mui/material";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { theme } from "./theme";
import { store } from "@/redux/store";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  );
};

export default Providers;
