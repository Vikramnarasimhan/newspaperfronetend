import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

export default function TrendingNews() {
  const trending = [
    "Global Markets See Mixed Reaction to Rate Cut",
    "PM Announces New Green Energy Initiative",
    "Tech Giants Face Fresh Data Privacy Scrutiny",
    "Cricket World Cup: India Secures Dominant Win",
    "Oil Prices Surge Amid Middle East Tensions",
  ];

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1300px",
        mx: "auto",
        display: "flex",
        justifyContent: "center",
        mb: 2,
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: "1300px",
          background: "#FFFADC",
          borderRadius: 2,
          boxShadow: 3,
          overflow: "hidden",
          borderTop: "3px solid #d32f2f", // Red accent top border
        }}
      >
        <CardContent sx={{ px: 3, py: 2 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: "#d32f2f",
              mb: 1.5,
              textTransform: "uppercase",
              letterSpacing: 1,
            }}
          >
            Trending Now
          </Typography>
          <Divider sx={{ mb: 1 }} />
          {trending.map((news, index) => (
            <Typography
              key={index}
              variant="body1"
              sx={{
                fontSize: { xs: 13, md: 15 },
                color: "#333",
                lineHeight: 1.6,
                mb: index !== trending.length - 1 ? 1 : 0,
                "&:hover": { color: "#d32f2f", cursor: "pointer" },
                transition: "color 0.2s ease",
              }}
            >
              • {news}
            </Typography>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
}
