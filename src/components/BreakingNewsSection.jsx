import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function BreakingNewsSection() {
  const subNews = [
    {
      title: "Sub-news Box 1",
      desc: "Consequences for multiple ad hoc trade deals inked by the US this year.",
      bg: "#FFD166",
    },
    {
      title: "Sub-news Box 2",
      desc: "India remains the hardest-hit country due to 50% US tariffs.",
      bg: "#F4A261",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",  // shifted a bit right side
        pr: { md: 2 },               // smaller right padding
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "650px",         // narrower, fits column better
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
        }}
      >
        {/* Breaking News */}
        <Card
          sx={{
            width: "100%",
            background: "#FFFADC",
            borderRadius: 2,
            boxShadow: 4,
            transition: "transform 0.3s ease",
            cursor: "pointer",
            "&:hover": { transform: "scale(1.01)", boxShadow: 6 },
          }}
        >
          <CardContent sx={{ p: { xs: 2, md: 3 } }}>
            <Typography
              variant="h5"
              gutterBottom
              color="error"
              sx={{ fontWeight: 600, fontSize: { xs: 20, md: 24 } }}
            >
              Breaking News: Why US top court's curb on Trump's powers can deliver a fairer India trade deal
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ fontSize: { xs: 14, md: 15 }, lineHeight: 1.6 }}
            >
              The outcome of the case could have significant consequences for multiple ad hoc trade deals inked by the US since early this year.
            </Typography>
          </CardContent>
        </Card>

        {/* Sub-News Squares */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "stretch",
            gap: 2,
            width: "100%",
          }}
        >
          {subNews.map(({ title, desc, bg }, index) => (
            <Card
              key={index}
              sx={{
                flex: "1 1 48%",
                aspectRatio: "1 / 1",
                background: bg,
                borderRadius: 2,
                boxShadow: 3,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.03)", boxShadow: 6 },
              }}
            >
              <CardContent sx={{ p: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, fontSize: { xs: 14, md: 17 } }}>
                  {title}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: { xs: 12, md: 14 }, mt: 1 }}>
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
