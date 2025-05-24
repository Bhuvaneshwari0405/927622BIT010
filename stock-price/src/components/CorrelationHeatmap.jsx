import { Box, Typography, Tooltip } from '@mui/material';

const getColor = (value) => {
  const val = parseFloat(value);
  if (val >= 0.8) return '#1b5e20'; 
  if (val >= 0.3) return '#66bb6a'; 
  if (val >= -0.3) return '#eeeeee'; 
  if (val >= -0.8) return '#ef5350'; 
  return '#b71c1c'; 
};

export default function CorrelationHeatmap({ data, stocks }) {
  return (
    <Box mt={4}>
      <Typography variant="h6" mb={2}>Correlation Heatmap</Typography>

      <Box display="grid" gridTemplateColumns={`80px repeat(${stocks.length}, 1fr)`} gap="1px" bgcolor="#ccc">
        
        <Box></Box>
        {stocks.map((s) => (
          <Tooltip key={s} title={`Avg: --  StdDev: --`} arrow>
            <Box p={1} textAlign="center" bgcolor="#fafafa">{s}</Box>
          </Tooltip>
        ))}

      
        {stocks.map((rowStock) => (
          <>
            <Tooltip title={`Avg: --  StdDev: --`} arrow>
              <Box p={1} textAlign="center" bgcolor="#fafafa">{rowStock}</Box>
            </Tooltip>

            {stocks.map((colStock) => {
              const cell = data.find(d => d.x === rowStock && d.y === colStock);
              return (
                <Tooltip
                  key={`${rowStock}-${colStock}`}
                  title={`Correlation: ${cell.correlation}\nAvg: ${cell.avg}\nStdDev: ${cell.stdDev}`}
                  arrow
                >
                  <Box p={1} bgcolor={getColor(cell.correlation)} />
                </Tooltip>
              );
            })}
          </>
        ))}
      </Box>

      
      <Box mt={2}>
        <Typography variant="body2" mb={1}>Legend:</Typography>
        <Box display="flex" gap={2}>
          <Box bgcolor="#1b5e20" width={20} height={20} /> <span>Strong Positive</span>
          <Box bgcolor="#66bb6a" width={20} height={20} /> <span>Moderate Positive</span>
          <Box bgcolor="#eeeeee" width={20} height={20} /> <span>Neutral</span>
          <Box bgcolor="#ef5350" width={20} height={20} /> <span>Moderate Negative</span>
          <Box bgcolor="#b71c1c" width={20} height={20} /> <span>Strong Negative</span>
        </Box>
      </Box>
    </Box>
  );
}
