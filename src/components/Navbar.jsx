import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
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
              `${data.city || data.locality || "Unknown"}, ${
                data.countryName || ""
              }`
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
        <Toolbar>
          {/* 🍔 Menu Icon */}
          <IconButton
            edge="start"
            aria-label="menu"
            onClick={() => setDrawerOpen(true)}
            sx={{ color: "#e6aa07ff", mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          {/* 📍 Live Location Widget */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: "#6D2323",
              background: "#fff5cc",
              px: 2,
              py: 0.6,
              borderRadius: "10px",
              fontWeight: "bold",
              fontSize: "0.9rem",
              boxShadow: "inset 0 0 4px rgba(0,0,0,0.1)",
            }}
          >
            <span style={{ fontSize: "1.1rem" }}>📍</span>
            <Typography sx={{ fontSize: 13, fontWeight: 600 }}>
              {error ? error : location}
            </Typography>
          </Box>

          {/* 📰 Logo */}
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            <span
              style={{
                background: "#e6aa07ff",
                color: "#FFFADC",
                padding: "0 12px",
                borderRadius: "4px",
                marginRight: "4px",
              }}
            >
              M
            </span>
            <span
              style={{
                background: "#e6aa07ff",
                color: "#FFFADC",
                padding: "0 12px",
                borderRadius: "4px",
                marginRight: "4px",
              }}
            >
              I
            </span>
            <span
              style={{
                background: "#e6aa07ff",
                color: "#FFFADC",
                padding: "0 12px",
                borderRadius: "4px",
              }}
            >
              D
            </span>
          </Typography>

          {/* Buttons */}
          <Button
            variant="contained"
            sx={{
              mr: 1,
              backgroundColor: "#e6aa07ff",
              color: "#FFFADC",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#e6aa07ff" },
            }}
            onClick={() => navigate("/plans")}  // ✅ Navigate to plans page on click
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
          >
            Sign In
          </Button>
        </Toolbar>

        {/* 🔸 Secondary Navbar */}
        <Toolbar
          variant="dense"
          sx={{
            justifyContent: "center",
            background: "#FFFADC",
            color: "#6D2323",
          }}
        >
          {menuItems.map((link) => (
            <Button
              key={link}
              sx={{
                mx: 1,
                color: "#6D2323",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "#e6aa07ff", color: "#FFFADC" },
                textTransform: "none",
              }}
            >
              {link}
            </Button>
          ))}
        </Toolbar>
      </AppBar>

      {/* 🟨 Drawer (opens on hamburger click) */}
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
          {menuItems.map((text, index) => (
            <Button
              key={index}
              fullWidth
              sx={{
                justifyContent: "flex-start",
                color: "#6D2323",
                fontWeight: "bold",
                mb: 0.5,
                "&:hover": {
                  backgroundColor: "#e6aa07ff",
                  color: "#FFFADC",
                },
                textTransform: "none",
              }}
            >
              {text}
            </Button>
          ))}
        </Box>
      </Drawer>
    </>
  );
}
