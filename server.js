const express = require('express');
const app = express();

const moviesRouter = require('./api/movies');
app.use(express.json())
app.use('/movies', moviesRouter);

app.listen(3000, () => console.log('Ready on port 3000!'));