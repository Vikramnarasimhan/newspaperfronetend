import React, { useState } from "react";
import { Box, Typography, Tabs, Tab, Card, CardContent, CardMedia } from "@mui/material";
import tnnews1 from "../assets/economy.png";
import tnnews2 from "../assets/economy.png";

const states = ["Tamil Nadu", "Telangana", "Karnataka", "Kerala", "Andhra Pradesh"];

const newsData = [
  {
    image: tnnews1,
    title: "Seven held for attacking PMK MLA Arul’s supporters in Salem",
    desc: "Police acted swiftly after the incident was reported on Monday.",
    author: "THE HINDU BUREAU"
  },
  {
    image: tnnews2,
    title: "When Jayalalithaa proposed chemical castration for rapists",
    desc: "A controversial proposal revisited amidst ongoing debates.",
    author: "D. SURESH KUMAR"
  },
  {
    title: "Boats and coracles to be procured for flood rescue in Tamil Nadu",
    desc: "",
    author: "DEEPA H. RAMAKRISHNAN"
  },
  {
    title: "Coimbatore gang-rape: survivor scaled compound wall of house for refuge",
    desc: "",
    author: "WILSON THOMAS"
  },
  {
    title: "Tamil Nadu's 'encounters' with artificial rain-making over 50 years",
    desc: "",
    author: "T. RAMAKRISHNAN"
  }
];

export default function StateUpdates() {
  const [stateIdx, setStateIdx] = useState(0);

  return (
    <Box
      sx={{
        width: "100%",
        px: { xs: 1, sm: 2 },
        py: 4,
        background: "#FFFADC",
        mt: 5,
        borderRadius: 2,
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Section Title */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: 800,
          color: "#e65100",
          letterSpacing: 1.5,
          textAlign: "center",
          mb: 1,
          fontFamily: "serif",
        }}
      >
        States Updates
      </Typography>
      {/* State Tabs */}
      <Tabs
        value={stateIdx}
        onChange={(_, v) => setStateIdx(v)}
        textColor="warning"
        indicatorColor="warning"
        sx={{
          mb: 3,
          ".MuiTab-root": {
            fontWeight: 600,
            color: "#ce6601",
            fontFamily: "serif",
            px: 2,
            letterSpacing: 0.2,
            minHeight: 36,
            fontSize: 16,
          },
          ".Mui-selected": {
            color: "#e65100",
            borderBottom: "2.5px solid #ff9800",
          },
          ".MuiTabs-indicator": {
            background: "#ff9800",
            height: 2.5,
          },
        }}
        variant="scrollable"
        allowScrollButtonsMobile
      >
        {states.map((name, idx) => (
          <Tab label={name} key={idx} />
        ))}
      </Tabs>
      {/* 5 Headline Cards Row */}
      <Box
        sx={{
          width: "100%",
          maxWidth: 1400,
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: 2,
        }}
      >
        {newsData.map((item, idx) => (
          <Card
            key={idx}
            sx={{
              height: "100%",
              borderRadius: 3,
              boxShadow: 2,
              p: 0,
              display: "flex",
              flexDirection: "column",
              background: idx % 2 === 0 ? "#FFFBEA" : "#FFFDF6",
              transition: "transform 0.18s",
              "&:hover": { transform: "translateY(-4px)", boxShadow: 5 },
            }}
          >
            {item.image && (
              <CardMedia
                component="img"
                image={item.image}
                alt={item.title}
                height="112"
                sx={{
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                  objectFit: "cover",
                  width: "100%",
                }}
              />
            )}
            <CardContent sx={{ py: 2, px: 2, flex: 1 }}>
              <Typography
                sx={{
                  fontFamily: "serif",
                  fontWeight: 700,
                  fontSize: 14.8,
                  color: "#be4c04",
                  mb: 1,
                }}
              >
                {item.title}
              </Typography>
              {item.desc && (
                <Typography
                  sx={{ color: "#7b5310", fontSize: 12.7, mb: 0.5, minHeight: 32 }}
                >
                  {item.desc}
                </Typography>
              )}
              <Typography
                sx={{ fontSize: 12, color: "#be8412", fontWeight: 500, letterSpacing: 0.1 }}
              >
                {item.author}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
