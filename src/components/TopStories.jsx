import React from "react";
import { Card, CardContent, Typography, Divider, Box } from "@mui/material";

export default function TopStories() {
  const stories = [
    {
      title: "AI Revolutionizes Healthcare Diagnostics",
      desc: "New algorithms are cutting detection times for rare diseases by over 60%.",
    },
    {
      title: "Stock Markets See Record Highs",
      desc: "Investors celebrate as tech and energy stocks fuel global market optimism.",
    },
    {
      title: "India to Host Global Climate Summit 2025",
      desc: "World leaders to gather in New Delhi to address rising temperature targets.",
    },
    {
      title: "Space Tourism Gets a Boost",
      desc: "Private companies announce new orbital missions open to civilian travelers.",
    },
  ];

  return (
    <Card
      sx={{
        background: "#FFFADC",
        borderRadius: 2,
        boxShadow: 4,
        p: 2,
        mt: 2,
        maxHeight: "400px",
        mb:3,
        overflowY: "auto",
      }}
    >
      <Typography
        variant="h6"
        color="primary"
        sx={{
          fontWeight: 600,
          mb: 2,
          textAlign: "center",
          letterSpacing: 0.5,
        }}
      >
        Top Stories
      </Typography>

      <Divider sx={{ mb: 2 }} />

      {stories.map((story, index) => (
        <Box
          key={index}
          sx={{
            mb: 2.5,
            p: 1,
            pl: 2,
            borderLeft: "3px solid #ff9800",
            transition: "background 0.3s",
            "&:hover": {
              background: "#fff7ed",
            },
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 600, color: "#333" }}
          >
            {story.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#555", fontSize: 13, mt: 0.5 }}
          >
            {story.desc}
          </Typography>
          {index < stories.length - 1 && (
            <Divider sx={{ mt: 1.5, opacity: 0.3 }} />
          )}
        </Box>
      ))}
    </Card>
  );
}
