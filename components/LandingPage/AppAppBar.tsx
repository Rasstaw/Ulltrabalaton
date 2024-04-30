"use client";
import * as React from "react";
import { PaletteMode } from "@mui/material";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
//import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Image from "next/legacy/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import NextAuth from "next-auth";

import authConfig from "@/auth.config";

export default function AppAppBar(req: { auth?: any; nextUrl?: any }) {
  const [open, setOpen] = React.useState(false);
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 15;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
      setOpen(false);
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: 0,
        bgcolor: "transparent",
        backgroundImage: "none",
        mt: 2,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          variant="regular"
          sx={(theme) => ({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 1,
            borderRadius: "0px",
            bgcolor:
              theme.palette.mode === "light"
                ? "hsla(220, 60%, 99%, 0.6)"
                : "hsla(220, 0%, 0%, 0.7)",
            backdropFilter: "blur(24px)",
            maxHeight: 40,
            border: "1px solid",
            borderColor: "divider",
            boxShadow:
              theme.palette.mode === "light"
                ? "0 1px 2px hsla(210, 0%, 0%, 0.05), 0 2px 12px hsla(210, 100%, 80%, 0.5)"
                : "0 1px 2px hsla(210, 0%, 0%, 0.5), 0 2px 12px hsla(210, 100%, 25%, 0.3)",
          })}
        >
          <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
            <div
              style={{
                position: "relative",
                width: 50,
                height: 50,
                flexGrow: 0,
              }}
            >
              <Link href="/">
                <div
                  style={{
                    position: "relative",
                    width: 50,
                    height: 50,
                    cursor: "pointer",
                  }}
                >
                  {" "}
                  {/* covering the link with the image3 */}
                  <Image
                    src="/next.svg"
                    alt="Site Logo"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </Link>
            </div>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Button
                className="hover:bg-black-400 text-blue-400 font-bols py-2 px-2 rounded"
                variant="link"
                color="info"
                onClick={() => scrollToSection("features")}
              >
                Events
              </Button>

              <Button
                variant="link"
                className="hover:bg-black-400 text-blue-400 font-bols py-2 px-2 rounded"
                onClick={() => scrollToSection("highlights")}
              >
                Highlights
              </Button>

              <Button
                variant="link"
                className="hover:bg-black-400 text-blue-400 font-bols py-2 px-2 rounded"
                color="info"
                onClick={() => scrollToSection("faq")}
              >
                FAQ
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 0.5,
              alignItems: "center",
            }}
          >
            <Link href="/auth/login" passHref>
              <Button variant="link" color="blur">
                {isLoggedIn ? "logout" : "Login"}
              </Button>
            </Link>
            <Link href="/auth/register" passHref>
              <Button variant="default" color="primary">
                Signup
              </Button>
            </Link>
          </Box>
          <Box sx={{ display: { sm: "flex", md: "none" } }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
              <Box
                sx={{
                  p: 2,
                  backgroundColor: "background.default",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <Divider sx={{ my: 3 }} />
                <MenuItem
                  className="hover:bg-black-400 text-blue-400 font-bols py-2 px-2 rounded"
                  onClick={() => scrollToSection("features")}
                >
                  Events
                </MenuItem>

                <MenuItem
                  className="hover:bg-black-400 text-blue-400 font-bols py-2 px-2 rounded"
                  onClick={() => scrollToSection("highlights")}
                >
                  Highlights
                </MenuItem>
                <MenuItem onClick={() => scrollToSection("faq")}>FAQ</MenuItem>

                <MenuItem>
                  <Link
                    href={!isLoggedIn ? "/auth/logout" : "/auth/Login"}
                    passHref
                  >
                    <Button
                      className="hover:bg-black-400 text-black-400 font-bols py-2 px-2 rounded"
                      variant="outline"
                    >
                      {!isLoggedIn ? "logout" : "Login"}
                    </Button>
                  </Link>
                </MenuItem>
                <MenuItem className="hover:bg-black-400 text-black-400 font-bols py-2 px-2 rounded">
                  <Link href="/auth/register" passHref>
                    <Button variant="outline">
                      {isLoggedIn ? "" : "signup"}
                    </Button>
                  </Link>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
