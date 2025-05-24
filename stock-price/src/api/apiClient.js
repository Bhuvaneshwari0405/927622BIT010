import axios from 'axios';

const BASE_URL = 'https://your-api-base-url.com';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ4MDY3NTU1LCJpYXQiOjE3NDgwNjcyNTUsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImQ4Y2ViODJjLTg2ZDYtNGIwOC1iYjBkLTFmMmQ1NDQ0NzJkNyIsInN1YiI6ImJodXZhbmFjaGlubmFkdXJpQGdtYWlsLmNvbSJ9LCJlbWFpbCI6ImJodXZhbmFjaGlubmFkdXJpQGdtYWlsLmNvbSIsIm5hbWUiOiJiaHV2YW5lc2h3YXJpIGMiLCJyb2xsTm8iOiI5Mjc2MjJiaXQwMTAiLCJhY2Nlc3NDb2RlIjoid2hlUVV5IiwiY2xpZW50SUQiOiJkOGNlYjgyYy04NmQ2LTRiMDgtYmIwZC0xZjJkNTQ0NDcyZDciLCJjbGllbnRTZWNyZXQiOiJySll6cWVqRVphR3dXUHl2In0.fY-IxeFm_zArym7BWS4LYIFDFLDS91BH_BwodAtWo3U';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default api;
