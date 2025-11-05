import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Navbar from "./components/Navbar";
import BreakingNewsSection from "./components/BreakingNewsSection";
import Top5ViralNews from "./components/Top5ViralNews";
import SidebarAdBanner from "./components/SidebarAdBanner";
import StockWidget from "./components/StockWidget";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import LatestTimeline from "./components/LatestTimeline";
import LiveTicker from "./components/LiveTicker";
import TrendingNews from "./components/TrendingNews";
import ExploreMore from "./components/ExploreMore";
import EditorsPicks from "./components/EditorsPicks";
import TopStories from "./components/TopStories";
import LeftColumnAd from "./components/LeftColumnAd";
import StateUpdates from "./components/StateUpdates";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SubscriptionPlans from "./pages/SubscriptionPlans";
import SubscriptionForm from "./pages/SubscriptionForm";

function MainPageContent() {
  return (
    <div
      style={{
        backgroundColor: "#fafafa",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <Navbar />
      <LiveTicker />

      <div style={{ marginTop: 148 }}>
        {/* 🔸 Full-width Top Ad Banner */}
        <Card
          sx={{
            width: "100vw",
            height: 80,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: 3,
            borderRadius: 0,
            color: "#757575",
            fontWeight: "bold",
            letterSpacing: 2,
            backgroundColor: "#fff",
            borderBottom: "2px solid #e0e0e0",
            position: "relative",
            left: "50%",
            right: "50%",
            marginLeft: "-50vw",
            marginRight: "-50vw",
            zIndex: 1,
          }}
        >
          <Typography variant="h6" sx={{ fontSize: { xs: 13, md: 16 } }}>
            ADVERTISEMENT
          </Typography>
        </Card>

        {/* 🔹 MAIN GRID */}
        <main
          style={{
            maxWidth: "1300px",
            margin: "0 auto",
            marginTop: 16,
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
          }}
        >
          <Grid
            container
            spacing={3}
            alignItems="flex-start"
            sx={{
              flexWrap: { xs: "wrap", md: "nowrap" },
              alignItems: "flex-start",
            }}
          >
            {/* 🔸 LEFT COLUMN */}
            <Grid
              item
              xs={12}
              md={3}
              sx={{
                minWidth: { md: 220 },
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Top5ViralNews />
              <SidebarAdBanner />
              <TrendingNews />
              <LeftColumnAd height={300} sx={{ mt: -3 }} />
            </Grid>
            {/* 🔹 CENTER COLUMN */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                minWidth: { md: 0 },
                mb: -2.5,
              }}
            >
              <BreakingNewsSection />
            </Grid>
            {/* 🔸 RIGHT COLUMN */}
            <Grid
              item
              xs={12}
              md={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1.5,
                minWidth: { md: 260 },
                position: { md: "sticky", xs: "static" },
                top: { md: 100 },
                alignSelf: "flex-start",
                height: "fit-content",
              }}
            >
              <StockWidget />
              <LatestTimeline />
              <TopStories />
            </Grid>
          </Grid>
        </main>
        {/* 🌐 Full-width ExploreMore Section */}
        <Box sx={{ mb: 3 }}>
          <ExploreMore />
        </Box>
        {/* 🌐 Full-width Editors Picks Section */}
        <Box sx={{ mb: 3 }}>
          <EditorsPicks />
        </Box>
        {/* 🌐 Full-width State Updates Section */}
        <Box sx={{ mb: 3 }}>
          <StateUpdates />
        </Box>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Home/news page */}
        <Route path="/" element={<MainPageContent />} />
        {/* Subscription pages */}
        <Route path="/plans" element={<SubscriptionPlans />} />
        <Route path="/subscribe" element={<SubscriptionForm />} />
      </Routes>
    </Router>
  );
}
