import React, { useEffect, useState } from 'react';
import api from '../api/apiClient';
import {
  Container,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress,
} from '@mui/material';

const StockPage = () => {
  const [stocks, setStocks] = useState([]);
  const [selectedStock, setSelectedStock] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchStocks = async () => {
    try {
      setLoading(true);
      const res = await api.get('/stocks');
      const stocksObj = res.data.stocks;
      const stocksArray = Object.entries(stocksObj).map(([name, symbol]) => ({
        name,
        symbol,
      }));
      setStocks(stocksArray);
      setLoading(false);
    } catch (err) {
      console.error('Failed to fetch stocks', err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStocks();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        📈 Stock Price Chart
      </Typography>

      {loading ? (
        <CircularProgress />
      ) : (
        <FormControl fullWidth margin="normal">
          <InputLabel>Select a Stock</InputLabel>
          <Select
            value={selectedStock}
            label="Select a Stock"
            onChange={(e) => setSelectedStock(e.target.value)}
          >
            {stocks.map((stock) => (
              <MenuItem key={stock.symbol} value={stock.symbol}>
                {stock.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}

      {selectedStock && (
        <Typography variant="h6" sx={{ mt: 3 }}>
          Chart for: {selectedStock}
        </Typography>
      )}
    </Container>
  );
};

export default StockPage;
