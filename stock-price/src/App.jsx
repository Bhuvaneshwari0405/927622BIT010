import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@mui/material';
import StockPage from './pages/StockPage';
import HeatmapPage from './pages/HeatmapPage';

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">Stock Page</Button>
          <Button color="inherit" component={Link} to="/heatmap">Correlation Heatmap</Button>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<StockPage />} />
        <Route path="/heatmap" element={<HeatmapPage />} />
      </Routes>
    </Router>
  );
}

export default App;
