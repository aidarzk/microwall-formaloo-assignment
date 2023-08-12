"use client";
import { persistor, store } from "@/redux/store";
import "@/shared/styles/globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeRegistry } from "./ThemeRegistry";
import { Box } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry options={{ key: "mui" }}>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <Box p={2}>{children}</Box>
            </PersistGate>
          </Provider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
