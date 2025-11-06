import Box from "@mui/material/Box";

const headlines = [
  "Opposition Walkout",
  "TN CM Speech",
  "Bihar Election Updates",
  "Market opens flat",
  "Sports: India wins series",
];

export default function LiveTicker() {
  return (
    <Box
      className="ticker-bar"
      sx={{
        position: "fixed",
        top: 100, // 👈 adjust depending on your Navbar height
        left: 0,
        width: "100%",
        zIndex: 1100,
      }}
    >
      <span className="ticker-live">LIVE</span>
      <span className="ticker-text">
        {headlines.join("  |  ")}
      </span>
    </Box>
  );
}
