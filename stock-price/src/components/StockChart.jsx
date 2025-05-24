import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';
import { CircularProgress, Typography, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import axios from 'axios';

const STOCK_PRICES_URL = 'http://20.244.56.144/evaluation-service/prices';

const intervals = [5, 15, 30, 60, 120]; // last m minutes selectable

const StockChart = ({ stockSymbol, token }) => {
  const [data, setData] = useState([]);
  const [interval, setInterval] = useState(30);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!stockSymbol || !token) return;

    const fetchPrices = async () => {
      setLoading(true);
      try {
        const res = await axios.get(STOCK_PRICES_URL, {
          params: {
            stockSymbol,
            lastMins: interval,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Assuming response has a 'prices' array like: [{ timestamp: 1234567890, price: 100.5 }, ...]
        // Format data for Recharts (parse timestamp to readable)
        const formattedData = res.data.prices.map(({ timestamp, price }) => ({
          time: new Date(timestamp * 1000).toLocaleTimeString(),
          price,
        }));

        setData(formattedData);
      } catch (err) {
        console.error('Error fetching stock prices:', err);
      }
      setLoading(false);
    };

    fetchPrices();
  }, [stockSymbol, interval, token]);

  if (!stockSymbol) return <Typography>Select a stock to see chart</Typography>;
  if (loading) return <CircularProgress />;

  // Calculate average price
  const avgPrice =
    data.length > 0 ? data.reduce((sum, item) => sum + item.price, 0) / data.length : 0;

  return (
    <Box sx={{ width: '100%', height: 400, mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        Price Chart for {stockSymbol} (Last {interval} minutes)
      </Typography>

      <FormControl sx={{ mb: 2, minWidth: 120 }}>
        <InputLabel id="interval-select-label">Interval (minutes)</InputLabel>
        <Select
          labelId="interval-select-label"
          value={interval}
          label="Interval (minutes)"
          onChange={(e) => setInterval(e.target.value)}
        >
          {intervals.map((i) => (
            <MenuItem key={i} value={i}>
              {i}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis domain={['auto', 'auto']} />
          <Tooltip />
          <Legend />
          {/* Line for stock price */}
          <Line
            type="monotone"
            dataKey="price"
            stroke="#1976d2"
            dot={{ r: 2 }}
            activeDot={{ r: 6 }}
            name="Price"
          />
          {/* Line for average price */}
          <Line
            type="monotone"
            dataKey={() => avgPrice}
            stroke="#f50057"
            strokeDasharray="5 5"
            dot={false}
            name="Average Price"
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default StockChart;
