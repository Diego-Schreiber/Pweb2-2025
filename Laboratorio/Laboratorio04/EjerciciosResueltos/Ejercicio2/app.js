const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();

app.use(express.static('pub'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get('/recitar', (req, res) => {
  fs.readFile(path.resolve(__dirname, 'priv/poema.txt'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'No se pudo leer el poema' });
      return;
    }
    res.json({ text: data.replace(/\n/g, '<br>') });
  });
});

app.listen(3000, () => {
  console.log("Escuchando en: http://localhost:3000");
});
