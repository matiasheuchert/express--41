const express = require('express')

const port = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('hola kse\n');
});

app.listen(port);
