import React from "react";
import { Box, Card, CardMedia, CardContent, Typography } from "@mui/material";

// Import 4 images (update paths/names as needed)
import newsImg1 from "../assets/climatechange.png";
import newsImg2 from "../assets/climatechange.png";
import newsImg3 from "../assets/climatechange.png";
import newsImg4 from "../assets/climatechange.png";

const exploreBlocks = [
  {
    title: "Global Climate Talks Gain Momentum",
    desc: "Nations commit to faster carbon reduction at the latest UN summit.",
    img: newsImg1,
    bg: "#FFFADC",
  },
  {
    title: "Economic Outlook Brightens for Asia",
    desc: "IMF projects strong growth rebound led by India and Southeast Asia.",
    img: newsImg2,
    bg: "#FFFADC",
  },
  {
    title: "Tech Giants Face Fresh Data Privacy Scrutiny",
    desc: "Major tech firms are under review for new privacy regulations worldwide.",
    img: newsImg3,
    bg: "#FFFADC",
  },
  {
    title: "ISRO Prepares for Chandrayaan-4 Mission",
    desc: "Final testing begins as India plans a new lunar surface study.",
    img: newsImg4,
    bg: "#FFFADC",
  },
];

export default function ExploreMore() {
  return (
    <Box
      sx={{
        width: "100vw", // ✅ Full width
        mb:1,
        position: "relative",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
        background: "#FFFADC",
        py: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          color: "#d24419ff",
          mb: 4,
          textTransform: "uppercase",
          letterSpacing: 1,
        }}
      >
        Explore More
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr 1fr",
          },
          gap: 2,
          width: "100%",
          maxWidth: "1300px", // ✅ Matches main content width
          px: 2,
        }}
      >
        {exploreBlocks.map(({ title, desc, img, bg }, idx) => (
          <Card
            key={idx}
            sx={{
              background: bg,
              borderRadius: 2,
              boxShadow: 3,
              overflow: "hidden",
              height: "100%",
              transition: "transform 0.28s",
              "&:hover": {
                transform: "scale(1.03)",
                boxShadow: 6,
              },
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardMedia
              component="img"
              image={img}
              alt={title}
              height="180"
              sx={{
                objectFit: "cover",
                width: "100%",
              }}
            />
            <CardContent>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: "#E65100",
                  fontSize: { xs: 15, md: 18 },
                  mb: 0.5,
                }}
              >
                {title}
              </Typography>
              <Typography variant="body2" sx={{ color: "#212121" }}>
                {desc}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
