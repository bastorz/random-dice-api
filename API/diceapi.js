const express = require('express');
const app = express();
app.use(express.json());

let throwDice = Math.floor(Math.random(1) * 6);

app.get('/', (error, res) => {
      res.json(throwDice);
    });

app.listen(3000);