import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

export default function Navbar() {
  return (
    <AppBar
      position="fixed"
      elevation={2}
      sx={{
        backgroundColor: '#FFFADC',       // main cream BG
        color: '#6D2323',                 // dark text
      }}
    >
      <Toolbar>
        <IconButton edge="start" aria-label="menu" sx={{ color: '#e6aa07ff', mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <IconButton aria-label="search" sx={{ color: '#e6aa07ff', mr: 2 }}>
          <SearchIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center', fontWeight: 'bold' }}>
          <span style={{ background: "#e6aa07ff", color: "#FFFADC", padding: "0 12px", borderRadius: "4px", marginRight: "4px" }}>M</span>
          <span style={{ background: "#e6aa07ff", color: "#FFFADC", padding: "0 12px", borderRadius: "4px", marginRight: "4px" }}>I</span>
          <span style={{ background: "#e6aa07ff", color: "#FFFADC", padding: "0 12px", borderRadius: "4px" }}>D</span>
        </Typography>
        <Button
          variant="contained"
          sx={{
            mr: 1,
            backgroundColor: '#e6aa07ff',    // accent blue
            color: "#FFFADC",
            fontWeight: "bold",
            '&:hover': { backgroundColor: '#e6aa07ff'},
          }}
        >
          Register
        </Button>
        <Button
          variant="outlined"
          sx={{
            borderColor: '#e6aa07ff',
            color: '#e6aa07ff',
            fontWeight: 'bold',
            '&:hover': { borderColor: '#e6aa07ff', color: '#e6aa07ff' }
          }}
        >
          Sign In
        </Button>
      </Toolbar>
      <Toolbar
        variant="dense"
        sx={{
          justifyContent: "center",
          background: "#FFFADC",
          color: "#6D2323"
        }}
      >
        {[
          "Home", "News", "Sport", "Business", "Innovation", "Culture", "Arts", "Travel", "Earth", "Audio", "Video", "Live"
        ].map((link) => (
          <Button
            key={link}
            sx={{
              mx: 1,
              color: "#6D2323",
              fontWeight: "bold",
              '&:hover': { backgroundColor: "#e6aa07ff", color: "#FFFADC" },
              textTransform: "none"
            }}
          >
            {link}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
}
