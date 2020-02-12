const express = require("express");
const app = express();
const par = require("./par.js");

app.get('/', (req, res) => {
  res.send(par.pares());
});

app.listen(3000, () => console.log('Listening on port 3000!'));
