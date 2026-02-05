const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('🚀 KubeForge CI/CD Pipeline Working Successfully!');
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
