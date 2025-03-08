"use client";

import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Typography,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navItems = [
    { name: "Rank", path: "/rank" },
    { name: "Notes", path: "/note" },
    { name: "Game", path: "/game" },
    { name: "Media", path: "/media" },
  ];

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawer = (
    <Box
      sx={{
        width: 250,
        backgroundColor: "primary.dark",
        height: "100%",
        color: "white",
        paddingTop: 2,
      }}
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton component={Link} href={item.path} sx={{ "&:hover": { backgroundColor: "primary.light" } }}>
              <ListItemText primary={item.name} sx={{ textAlign: "center" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: "primary.main", boxShadow: "none" }}>
        <Toolbar>
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <Link href="/" passHref>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  cursor: "pointer",
                  letterSpacing: 1,
                  "&:hover": { color: "#333333" },
                }}
              >
                NarutoNote
              </Typography>
            </Link>
          </Box>

          {isMobile ? (
            <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={toggleDrawer(true)}>
              <MenuIcon sx={{ fontSize: 30 }} />
            </IconButton>
          ) : (
            <Box sx={{ display: "flex", gap: 2 }}>
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  component={Link}
                  href={item.path}
                  sx={{
                    color: "white",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    transition: "0.3s",
                    "&:hover": { color: "#333333", transform: "scale(1.1)" },
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawer}
      </Drawer>
    </>
  );
}
