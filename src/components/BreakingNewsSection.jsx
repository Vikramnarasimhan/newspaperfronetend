import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";

import supremeCourtImg from "../assets/supremecourt.png";
import aiImg from "../assets/AI.png";
import cricketImg from "../assets/indianworldcup.png";
import climateImg from "../assets/climatechange.png";
import economyImg from "../assets/economy.png";

export default function BreakingNewsSection() {
  const subNews = [
    {
      title: "Tech Giants Face New AI Regulation",
      desc: "Global leaders agree on guidelines for responsible artificial intelligence use.",
      bg: "#FFFADC",
      img: aiImg,
    },
    {
      title: "Cricket World Cup 2025: India Through to Semis",
      desc: "India secures semifinal spot after a thrilling win against Australia.",
      bg: "#FFFADC",
      img: cricketImg,
    },
    {
      title: "Global Climate Talks Gain Momentum",
      desc: "Nations commit to faster carbon reduction in the latest UN summit.",
      bg: "#FFFADC",
      img: climateImg,
    },
    {
      title: "Economic Outlook Brightens for Asia",
      desc: "IMF projects strong growth rebound led by India and Southeast Asia.",
      bg: "#FFFADC",
      img: economyImg,
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        pr: { md: 1 },
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "670px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1.2, // 🔽 very tight vertical gap
        }}
      >
        {/* 🔴 Breaking News Card */}
        <Card
          sx={{
            width: "100%",
            background: "#FFFADC",
            borderRadius: 3,
            boxShadow: 4,
            transition: "transform 0.3s ease",
            cursor: "pointer",
            "&:hover": { transform: "scale(1.01)", boxShadow: 6 },
          }}
        >
          <CardMedia
            component="img"
            height="320" // 🔼 slightly taller image
            image={supremeCourtImg}
            alt="Breaking News"
            sx={{
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
              objectFit: "cover",
            }}
          />
          <CardContent sx={{ p: { xs: 2, md: 2.8 } }}>
            <Typography
              variant="h5"
              gutterBottom
              color="error"
              sx={{ fontWeight: 700, fontSize: { xs: 20, md: 25 } }}
            >
              Breaking News: US Supreme Court Limits Executive Trade Powers
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ fontSize: { xs: 13.5, md: 15.5 }, lineHeight: 1.55 }}
            >
              In a landmark ruling, the US top court restricts the President’s
              ability to make unilateral trade decisions — a move experts say
              could bring stability to global markets.
            </Typography>
          </CardContent>
        </Card>

        {/* 🟠 Sub-News Cards */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "stretch",
            gap: 1.2, // 🔽 very clean, minimal gap
            width: "100%",
          }}
        >
          {subNews.map(({ title, desc, bg, img }, index) => (
            <Card
              key={index}
              sx={{
                flex: "1 1 48%",
                background: bg,
                borderRadius: 3,
                boxShadow: 3,
                display: "flex",
                flexDirection: "column",
                minHeight: 220, // 🔼 slightly taller for better vertical fill
                transition: "transform 0.3s ease",
                
                "&:hover": { transform: "scale(1.02)", boxShadow: 5 },
              }}
            >
              <CardMedia
                component="img"
                height="160"
                image={img}
                alt={title}
                sx={{
                  objectFit: "cover",
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                }}
              />
              <CardContent sx={{ p: 1.8 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: 14, md: 16.5 },
                    textAlign: "center",
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: 12, md: 13.5 },
                    mt: 0.5,
                    textAlign: "center",
                  }}
                >
                  {desc}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
