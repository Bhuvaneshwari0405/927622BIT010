import { useState } from 'react';
import { Box, Select, MenuItem, Typography } from '@mui/material';
import StockChart from '../components/StockChart';

// Dummy data for testing
const dummyData = Array.from({ length: 20 }, (_, i) => ({
  time: `${i + 1} min ago`,
  price: (100 + Math.random() * 10).toFixed(2),
}));

export default function StockPage() {
  const [minutes, setMinutes] = useState(60);

  return (
    <Box p={2}>
      <Typography variant="h4">Stock Page</Typography>

      <Typography variant="subtitle1" mt={2}>Select Time Interval</Typography>
      <Select value={minutes} onChange={(e) => setMinutes(e.target.value)}>
        {[5, 15, 30, 60, 120].map((m) => (
          <MenuItem key={m} value={m}>{m} Minutes</MenuItem>
        ))}
      </Select>

      <StockChart data={dummyData} />
    </Box>
  );
}
