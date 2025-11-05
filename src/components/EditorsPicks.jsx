import React, { useState } from "react";
import { Box, Typography, Card, CardContent, CardMedia, IconButton } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

// Dummy images for demo (replace with your paths)
import pickImg1 from "../assets/climatechange.png";
import pickImg2 from "../assets/AI.png";
import pickImg3 from "../assets/economy.png";
import pickImg4 from "../assets/indianworldcup.png";
import pickImg5 from "../assets/climatechange.png";
import pickImg6 from "../assets/AI.png";
import pickImg7 from "../assets/economy.png";
import pickImg8 from "../assets/indianworldcup.png";

const picks = [
  {
    title: "Inside India's AI Revolution",
    desc: "Editor's analysis of India's advancements in AI, ethics, and regulation.",
    img: pickImg1,
  },
  {
    title: "Climate Policies: Editor's Choice",
    desc: "A look at government and NGOs collaborating for change.",
    img: pickImg2,
  },
  {
    title: "Markets: The Next Big Wave",
    desc: "Expert insight on bullish sectors for the second half of the year.",
    img: pickImg3,
  },
  {
    title: "Women Leaders in Tech",
    desc: "Celebrating the rise of impactful female entrepreneurs.",
    img: pickImg4,
  },
  {
    title: "Education: Unlocking New Models",
    desc: "The editor's view on tech-enabled learning post-pandemic.",
    img: pickImg5,
  },
  {
    title: "Global Sports & India",
    desc: "How India is breaking records at international events.",
    img: pickImg6,
  },
  {
    title: "Healthcare Innovation",
    desc: "India's new wave of health-tech driven growth.",
    img: pickImg7,
  },
  {
    title: "Sustainable Startups",
    desc: "Editors highlight India’s greenest new companies.",
    img: pickImg8,
  },
];

export default function EditorsPicks() {
  const [page, setPage] = useState(0); // 0: first 4, 1: next 4

  const handleNext = () => setPage(page === 0 ? 1 : 0);
  const handlePrev = () => setPage(page === 1 ? 0 : 1);

  // Slice the picks array
  const visiblePicks = picks.slice(page * 4, page * 4 + 4);

  return (
    <Box
      sx={{
        width: "100%",
        pt: 4,
        pb: 3,
        background: "#FFFADC",
        minHeight: 370,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
      }}
    >
      <Box sx={{ width: '100%', display: "flex", justifyContent: "center", alignItems: "center", mb: 1, position: "relative" }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            color: "#D84315",
            textTransform: "uppercase",
            letterSpacing: 1,
            textAlign: "center",
          }}
        >
          Editors Picks
        </Typography>
        <IconButton
          aria-label="previous"
          onClick={handlePrev}
          
          sx={{
            position: "absolute",
            left: { xs: 10, md: 45 },
            top: "50%",
            transform: "translateY(-50%)",
            bgcolor: "#FFFADC",
            boxShadow: 2,
            "&:hover": { bgcolor: "#FFE0B2" },
            display: page === 0 ? "none" : "flex",
          }}
        >
          <ArrowBackIosNewIcon fontSize="small" />
        </IconButton>
        <IconButton
          aria-label="next"
          onClick={handleNext}
          
          sx={{
            position: "absolute",
            right: { xs: 10, md: 45 },
            top: "50%",
            transform: "translateY(-50%)",
            bgcolor: "#FFFADC",
            boxShadow: 2,
            "&:hover": { bgcolor: "#FFE0B2" },
             display: page === 1 ? "none" : "flex",
          }}
        >
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </Box>
      <Box
        sx={{
          width: "100%",
          maxWidth: 1320,
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: 1,
        }}
      >
        {visiblePicks.map((pick, idx) => (
          <Card
            key={idx}
            sx={{
              minHeight: 305,
              borderRadius: 3,
              boxShadow: 3,
              background: "#FFF7ED",
              p: 0,
              display: "flex",
              flexDirection: "column",
              transition: "transform 0.2s",
              "&:hover": {
                transform: "scale(1.025)",
                boxShadow: 5,
              },
            }}
          >
            <CardMedia
              component="img"
              image={pick.img}
              height="145"
              sx={{
                width: "100%",
                objectFit: "cover",
                borderTopLeftRadius: 14,
                borderTopRightRadius: 14,
              }}
              alt={pick.title}
            />
            <CardContent sx={{ py: 2.5, px: 3, flexGrow: 1 }}>
              <Typography variant="h6" sx={{
                fontWeight: 700,
                fontSize: 18,
                color: "#BF360C",
                mb: 1,
              }}>
                {pick.title}
              </Typography>
              <Typography variant="body2" sx={{
                color: "#525252",
                fontSize: 14,
                mt: 0.5
              }}>
                {pick.desc}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
