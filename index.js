const express = require('express')

const app = express();

app.get('/', (req, res) => {
  res.send('hola kse\n');
});

app.listen(3000);
