'use strict';

const express = require('express');

const port = 8888;
const host = '0.0.0.0';

const app = express();
app.get('/', (_, res) => {
  res.send('Hello World\n');
});

app.listen(port, host);
console.log(`Running on http://${host}:${port}`);
