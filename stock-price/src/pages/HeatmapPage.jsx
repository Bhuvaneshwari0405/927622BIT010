import { useState } from 'react';
import { Box, Select, MenuItem, Typography } from '@mui/material';

export default function HeatmapPage() {
  const [minutes, setMinutes] = useState(60);

  return (
    <Box p={2}>
      <Typography variant="h4">Correlation Heatmap</Typography>

      <Typography variant="subtitle1" mt={2}>Select Time Interval</Typography>
      <Select value={minutes} onChange={(e) => setMinutes(e.target.value)}>
        {[5, 15, 30, 60, 120].map((m) => (
          <MenuItem key={m} value={m}>{m} Minutes</MenuItem>
        ))}
      </Select>

      {/* Placeholder for heatmap */}
      <Box mt={4} p={2} border="1px dashed grey" height={300} display="flex" alignItems="center" justifyContent="center">
        <Typography color="text.secondary">[Heatmap will be shown here]</Typography>
      </Box>
    </Box>
  );
}
