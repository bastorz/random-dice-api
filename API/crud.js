const express = require('express');
const app = express();
const router = express.Router();
app.use(express.json());

const movies = [{name: 'Matrix'},{name: 'Alicia en el país de las maravillas'},{name: 'Shrek'},{name: '101 Dalmatas'}];

router.get('/', (req, res) => {
    res.json(movies);
  });
  
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const movie = movies.find(movies.length);
    return res.send(movie);
  });


app.listen(3000);