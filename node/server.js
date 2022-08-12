require('dotenv').config();
const express = require('express')
const app = express()
const port = 3001
const path = require('path');
const router = require('./src/router/router');

app.use(express.static(path.resolve(__dirname, '../react/client/build')));

app.use(router);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})