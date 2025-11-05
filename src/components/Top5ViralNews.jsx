import { useEffect, useRef, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const viralVideos = [
  { title: 'Viral Clip 1', url: '/videos/clip1.mp4' },
  { title: 'Viral Clip 2', url: '/videos/clip2.mp4' },
  { title: 'Viral Clip 3', url: '/videos/clip3.mp4' },
  { title: 'Viral Clip 4', url: '/videos/clip4.mp4' },
  { title: 'Viral Clip 5', url: '/videos/clip5.mp4' },
];

export default function Top5ViralNews() {
  const [current, setCurrent] = useState(0);
  const timeout = useRef();

  useEffect(() => {
    timeout.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % viralVideos.length);
    }, 10000); // Switch every 10 seconds
    return () => clearTimeout(timeout.current);
  }, [current]);

  return (
    <Card sx={{
      mb: 3,
      background: '#FFFADC',
      boxShadow: 3,
      transition: 'transform 0.3s',
      cursor: 'pointer',
      '&:hover': { transform: 'scale(1.03)', boxShadow: 6 },
    }}>
      <CardContent>
        <Typography variant="h6" gutterBottom color="primary">
          Top 5 Viral News
        </Typography>
        <Card
          sx={{
            p: 1,
            background: '#fff',
            borderRadius: 2,
            transition: 'transform 0.3s',
            minWidth: 130,
            maxWidth: 300,
            margin: '0 auto',
            boxShadow: 1,
            cursor: 'pointer',
            '&:hover': { transform: 'scale(1.04)', boxShadow: 8 }
          }}
        >
          <video
            key={viralVideos[current].url}
            src={viralVideos[current].url}
            controls
            autoPlay
            loop
            muted
            style={{ width: '100%', borderRadius: 8 }}
          />
          <Typography align="center" variant="body2">
            {viralVideos[current].title}
          </Typography>
        </Card>
      </CardContent>
    </Card>
  );
}
