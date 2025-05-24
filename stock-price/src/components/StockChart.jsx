import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { Typography, Box } from '@mui/material';

export default function StockChart({ data = [] }) {
  if (data.length === 0) {
    return <Typography color="text.secondary">No stock data available</Typography>;
  }

  const average = (data.reduce((acc, d) => acc + d.price, 0) / data.length).toFixed(2);

  return (
    <Box mt={4}>
      <Typography variant="h6">Stock Price Chart</Typography>
      <Typography variant="body2" color="text.secondary">Average Price: {average}</Typography>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="time" />
          <YAxis domain={['auto', 'auto']} />
          <Tooltip formatter={(value, name) => [`$${value}`, name]} />
          <Line type="monotone" dataKey="price" stroke="#1976d2" dot />
          <ReferenceLine y={Number(average)} stroke="red" strokeDasharray="3 3" label="Avg" />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
}
