import axios from 'axios';

const BASE_URL = 'http://20.244.56.144/evaluation-service';


const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ4MDcwMTU1LCJpYXQiOjE3NDgwNjk4NTUsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImQ4Y2ViODJjLTg2ZDYtNGIwOC1iYjBkLTFmMmQ1NDQ0NzJkNyIsInN1YiI6ImJodXZhbmFjaGlubmFkdXJpQGdtYWlsLmNvbSJ9LCJlbWFpbCI6ImJodXZhbmFjaGlubmFkdXJpQGdtYWlsLmNvbSIsIm5hbWUiOiJiaHV2YW5lc2h3YXJpIGMiLCJyb2xsTm8iOiI5Mjc2MjJiaXQwMTAiLCJhY2Nlc3NDb2RlIjoid2hlUVV5IiwiY2xpZW50SUQiOiJkOGNlYjgyYy04NmQ2LTRiMDgtYmIwZC0xZjJkNTQ0NDcyZDciLCJjbGllbnRTZWNyZXQiOiJySll6cWVqRVphR3dXUHl2In0.8ElJNziYn7qpKF_0jEZM75bqLQM2Awnjs-3u1G3C93o';

const api = axios.create({
  baseURL: 'http://20.244.56.144/evaluation-service',
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});

export default api;
