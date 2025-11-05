import React from "react";
import { Card, Typography } from "@mui/material";

export default function LeftColumnAd({ height = 180 }) {
  return (
    <Card
      sx={{
        width: "100%",
        height: height,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 2,
        boxShadow: 3,
        mt:-1.5,
        backgroundColor: "#fff",
        border: "1px solid #e0e0e0",
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{
          color: "#757575",
          fontWeight: 600,
          letterSpacing: 1,
          textTransform: "uppercase",
        }}
      >
        Advertisement
      </Typography>
    </Card>
  );
}
