import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

export default function StockWidget() {
  const stocks = [
    { name: 'NIFTY 50', change: -0.64, value: 25597.65, changeValue: -165.70 },
    { name: 'SENSEX', change: -0.62, value: 83459.15, changeValue: -519.34 },
    { name: 'Nifty Bank', change: -0.47, value: 57827.05, changeValue: -274.40 }
  ];

  return (
    <Card
      sx={{
        background: '#FFFADC',
        p: 1,
        borderRadius: 2,
        boxShadow: 2,
        minWidth: 0,
        maxWidth: 400,
        mx: 'auto'
      }}
    >
      <Typography
        variant="subtitle2"
        sx={{
          mb: 1,
          fontSize: '1rem',
          textAlign: 'center',
          fontWeight: 600
        }}
      >
        India Markets
      </Typography>
      <Stack direction="row" spacing={1} justifyContent="center">
        {stocks.map((s, idx) => (
          <Card
            key={idx}
            sx={{
              minWidth: 100,
              maxWidth: 130,
              height: 100,
              background: '#FFF4F4',
              borderRadius: 2,
              boxShadow: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              p: 1,
            }}
          >
            <Typography color="red" fontWeight="bold" fontSize="0.95rem">
              {s.name}
            </Typography>
            <Typography color="error" fontSize="0.92rem">
              {s.change}%
            </Typography>
            <Typography fontSize="0.92rem">{s.value}</Typography>
            <Typography color="error" fontSize="0.92rem">
              {s.changeValue}
            </Typography>
          </Card>
        ))}
      </Stack>
    </Card>
  );
}
