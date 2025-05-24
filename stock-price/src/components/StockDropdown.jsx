import React, { useEffect, useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import axios from 'axios';

const STOCKS_URL = 'http://20.244.56.144/evaluation-service/stocks';

const StockDropdown = ({ token, selectedStock, setSelectedStock }) => {
  const [stocks, setStocks] = useState({});

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const res = await axios.get(STOCKS_URL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setStocks(res.data.stocks);
      } catch (error) {
        console.error('Failed to fetch stocks', error);
      }
    };
    if (token) fetchStocks();
  }, [token]);

  return (
    <FormControl fullWidth>
      <InputLabel id="stock-select-label">Select Stock</InputLabel>
      <Select
        labelId="stock-select-label"
        value={selectedStock}
        label="Select Stock"
        onChange={(e) => setSelectedStock(e.target.value)}
      >
        {Object.entries(stocks).map(([name, symbol]) => (
          <MenuItem key={symbol} value={symbol}>
            {name} ({symbol})
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default StockDropdown;
