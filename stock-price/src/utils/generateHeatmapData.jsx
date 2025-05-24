export function generateHeatmapData(stocks) {
  const data = [];
  for (let i = 0; i < stocks.length; i++) {
    for (let j = 0; j < stocks.length; j++) {
      data.push({
        x: stocks[i],
        y: stocks[j],
        correlation: (Math.random() * 2 - 1).toFixed(2), 
        avg: (Math.random() * 100 + 100).toFixed(2),
        stdDev: (Math.random() * 5).toFixed(2)
      });
    }
  }
  return data;
}
