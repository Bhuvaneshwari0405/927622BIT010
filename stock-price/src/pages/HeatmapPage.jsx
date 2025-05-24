import { useState } from 'react';
import { Box, Select, MenuItem, Typography } from '@mui/material';
import CorrelationHeatmap from '../components/CorrelationHeatmap';
import { generateHeatmapData } from '../utils/generateHeatmapData';

const stocks = ['AAPL', 'GOOG', 'MSFT', 'TSLA', 'AMZN'];

export default function HeatmapPage() {
  const [minutes, setMinutes] = useState(60);
  const heatmapData = generateHeatmapData(stocks);

  return (
    <Box p={2}>
      <Typography variant="h4">Correlation Heatmap</Typography>

      <Typography variant="subtitle1" mt={2}>Select Time Interval</Typography>
      <Select value={minutes} onChange={(e) => setMinutes(e.target.value)}>
        {[5, 15, 30, 60, 120].map((m) => (
          <MenuItem key={m} value={m}>{m} Minutes</MenuItem>
        ))}
      </Select>

      <CorrelationHeatmap data={heatmapData} stocks={stocks} />
    </Box>
  );
}
