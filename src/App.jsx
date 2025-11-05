import Grid from '@mui/material/Grid';
import Navbar from './components/Navbar';
import BreakingNewsSection from './components/BreakingNewsSection';
import Top5ViralNews from './components/Top5ViralNews';
import SidebarAdBanner from './components/SidebarAdBanner';
import StockWidget from './components/StockWidget';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import LatestTimeline from './components/LatestTimeline'; // 🆕 added

export default function App() {
  return (
    <div style={{ background: "#f9f9f9" }}> {/* Light background for contrast */}
      <Navbar />

      {/* ✅ Top Ad Banner */}
      <div style={{ paddingTop: 110, marginBottom: 16 }}>
        <Card
          sx={{
            width: '100%',
            maxWidth: '1300px',
            mx: "auto",
            height: 78,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 3,
            borderRadius: 2,
            color: '#757575',
            fontWeight: 'bold',
            letterSpacing: 2,
            backgroundColor: '#fff',
          }}
        >
          <Typography variant="h6" sx={{ fontSize: { xs: 13, md: 16 } }}>
            ADVERTISEMENT
          </Typography>
        </Card>
      </div>

      {/* MAIN GRID */}
<main style={{ maxWidth: '1300px', margin: '0 auto' }}>
  <Grid
    container
    spacing={3}
    alignItems="flex-start"
    sx={{
      // allow wrapping on small screens but prevent wrap on md and up
      flexWrap: { xs: 'wrap', md: 'nowrap' },
    }}
  >
    {/* LEFT COLUMN */}
    <Grid item xs={12} md={3} sx={{ minWidth: { md: 220 } }}>
      <Top5ViralNews />
      <SidebarAdBanner />
    </Grid>

    {/* CENTER COLUMN */}
    <Grid
      item
      xs={12}
      md={6}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        // make sure this column doesn't grow beyond its md space:
        minWidth: { md: 0 },
      }}
    >
      <BreakingNewsSection />
    </Grid>

    {/* RIGHT COLUMN — TIMELINE AREA */}
    <Grid
      item
      xs={12}
      md={3}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        // ensure column uses full column width and doesn't collapse
        minWidth: { md: 220 },
        // optional: stick to top when scrolling on larger screens
        position: { md: 'sticky', xs: 'static' },
        top: { md: 100, xs: 'auto' },
        alignSelf: 'flex-start',
      }}
    >
      <StockWidget />
      <LatestTimeline />
    </Grid>
  </Grid>
</main>

    </div>
  );
}
