import { Card, CardContent, Typography, Divider, Box } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function LatestTimeline() {
  const timelineData = [
    {
      time: "5:30 PM",
      title: "RBI announces new digital currency regulation",
      desc: "The new framework aims to ensure safer transactions across fintech platforms.",
    },
    {
      time: "4:45 PM",
      title: "Sensex jumps 250 points amid global rally",
      desc: "Investor sentiment improved after positive cues from Asian markets.",
    },
    {
      time: "4:00 PM",
      title: "ISRO prepares for Chandrayaan-4 mission",
      desc: "Final testing begins as India plans a new lunar surface study in 2026.",
    },
  ];

  return (
    <Card
      sx={{
        background: "#FFFADC",
        borderRadius: 2,
        boxShadow: 4,
        p: 2,
        maxHeight: "600px",
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
        Latest Timeline
      </Typography>

      <Divider sx={{ mb: 2 }} />

      {timelineData.map((item, index) => (
        <Box
          key={index}
          sx={{
            mb: 2.5,
            p: 1,
            borderLeft: "3px solid #d26319ff",
            pl: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
            <AccessTimeIcon fontSize="small" sx={{ mr: 1, color: "#757575" }} />
            <Typography
              variant="caption"
              sx={{ color: "#757575", fontWeight: 500 }}
            >
              {item.time}
            </Typography>
          </Box>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 600, color: "#333" }}
          >
            {item.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#555", fontSize: 13, mt: 0.5 }}
          >
            {item.desc}
          </Typography>
          {index < timelineData.length - 1 && (
            <Divider sx={{ mt: 1.5, opacity: 0.3 }} />
          )}
        </Box>
      ))}
    </Card>
  );
}
