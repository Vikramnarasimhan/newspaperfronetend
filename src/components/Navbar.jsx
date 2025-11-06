import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [location, setLocation] = useState("Fetching location...");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const { latitude, longitude } = pos.coords;
          try {
            const res = await fetch(
              `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
            );
            const data = await res.json();
            setLocation(
              `${data.city || data.locality || "Unknown"}, ${data.countryName || ""}`
            );
          } catch {
            setError("Unable to fetch location name");
          }
        },
        () => setError("Location access denied")
      );
    } else {
      setError("Geolocation not supported");
    }
  }, []);

  const menuItems = [
    "Home",
    "Regional",
    "World",
    "Politics",
    "Defense",
    "Economy",
    "Entertainment",
    "Sports",
    "Translate",
    "Video",
  ];

  return (
    <>
      <AppBar
        position="fixed"
        elevation={2}
        sx={{
          backgroundColor: "#FFFADC",
          color: "#6D2323",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            {/* Hamburger Menu */}
            <IconButton
              edge="start"
              aria-label="menu"
              onClick={() => setDrawerOpen(true)}
              sx={{ color: "#e6aa07ff" }}
            >
              <MenuIcon />
            </IconButton>

            {/* Location */}
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                alignItems: "center",
                gap: 1,
                background: "#fff5cc",
                px: 2,
                py: 0.5,
                borderRadius: "10px",
                fontWeight: 600,
                fontSize: "0.9rem",
                boxShadow: "inset 0 0 4px rgba(0,0,0,0.1)",
              }}
            >
              <span style={{ fontSize: "1.1rem" }}>📍</span>
              <Typography sx={{ fontSize: 13, fontWeight: 700 }}>
                {error ? error : location}
              </Typography>
            </Box>
          </Stack>

          {/* Logo/Brand */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              flexGrow: 1,
              letterSpacing: 2,
            }}
          >
            <span style={{
              background: "#e6aa07ff",
              color: "#FFFADC",
              padding: "0 12px",
              borderRadius: "4px",
              marginRight: "4px",
            }}>M</span>
            <span style={{
              background: "#e6aa07ff",
              color: "#FFFADC",
              padding: "0 12px",
              borderRadius: "4px",
              marginRight: "4px",
            }}>I</span>
            <span style={{
              background: "#e6aa07ff",
              color: "#FFFADC",
              padding: "0 12px",
              borderRadius: "4px",
            }}>D</span>
          </Typography>

          {/* Actions */}
          <Stack direction="row" spacing={1}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#e6aa07ff",
                color: "#FFFADC",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "#e6aa07ff" },
              }}
              onClick={() => navigate("/plans")}
            >
              Subscribe
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: "#e6aa07ff",
                color: "#e6aa07ff",
                fontWeight: "bold",
                "&:hover": { borderColor: "#e6aa07ff", color: "#e6aa07ff" },
              }}
              onClick={() => navigate("/signin")}
            >
              Sign In
            </Button>
          </Stack>
        </Toolbar>
        {/* Secondary menu: collapse on small screens */}
        <Toolbar
          variant="dense"
          sx={{
            justifyContent: "center",
            gap: 1,
            overflowX: "auto",
            background: "#FFFADC",
            color: "#6D2323",
            display: { xs: "none", sm: "flex" },
            minHeight: 40,
            px: 0,
          }}
        >
          {menuItems.map((link) => (
            <Button
              key={link}
              sx={{
                color: "#6D2323",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "#e6aa07ff", color: "#FFFADC" },
                textTransform: "none",
                px: 1.5,
                minWidth: 80,
              }}
            >
              {link}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
      {/* Drawer for mobile view */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: { backgroundColor: "#FFFADC", color: "#6D2323", width: 240 },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: "#e6aa07ff",
              textAlign: "center",
            }}
          >
            MENU
          </Typography>
          {menuItems.map((text, idx) => (
            <Button
              key={idx}
              fullWidth
              sx={{
                justifyContent: "flex-start",
                color: "#6D2323",
                fontWeight: "bold",
                mb: 0.5,
                "&:hover": { backgroundColor: "#e6aa07ff", color: "#FFFADC" },
                textTransform: "none",
              }}
            >
              {text}
            </Button>
          ))}
        </Box>
      </Drawer>
      {/* /*<Box sx={{ height: 110 }} /> */}
    </>
  );
}
