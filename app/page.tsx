import * as React from "react";
import { PaletteMode } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppAppBar from "@/components/LandingPage/AppAppBar";
import Hero from "@/components/LandingPage/Hero";
import Highlights from "@/components/LandingPage/Highlights";
import Features from "@/components/LandingPage/Features";
import FAQ from "@/components/LandingPage/FAQ";
import Footer from "@/components/ui/Footer";

import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500 to-blue-500">
      <CssBaseline />
      <AppAppBar />

      <Box sx={{ bgcolor: "background.default" }}>
        <Hero />
        <Features />
        <Highlights />
        <FAQ />
        <Footer />
      </Box>
    </main>
  );
}
