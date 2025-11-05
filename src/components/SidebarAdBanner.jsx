import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

export default function SidebarAdBanner() {
  return (
    <Card sx={{ mb: 3, background: '#fff', minHeight: 100, boxShadow: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Typography variant="h6" sx={{ color: '#757575', fontSize: { xs: 14, md: 16 }, letterSpacing: 2 }}>
        ADVERTISEMENT
      </Typography>
    </Card>
  );
}
