//IMPORTO LA CONNESSIONE AL DB
const connection = require('../data/db.js');

//INDEX
const index = (req, res) => {
  const sql = "SELECT * FROM movies";

  connection.query(sql, (err, results) => {
    if(err) return res.status(500).json({error: `Errore nell'esecuzione della query: ${err}`})

      const movies = results.map(movie => {
        return {
          ...movie,
          image: req.imagePath + movie.image
        }
      })

    res.send(movies);
  })
}

//SHOW
const show = (req, res) => {
  const { id } = req.params;

  const sqlMovie = "SELECT * FROM movies WHERE id = ?";

  //Creo query per le recensioni
  const sqlReviews = "SELECT * FROM reviews WHERE movie_id = ?";

  connection.query(sqlMovie, [id], (err, resultMovie) => {
    if(err) return res.status(500).json({error: `Errore nell'esecuzione della query: ${err}`})
      //Controllo se non trovo il film 
    if(resultMovie.length === 0 || resultMovie[0].id === null) return res.status(404).json({ error: `Film non trovato`});

      const movie = resultMovie[0]
      movie.image = req.imagePath + movie.image;

    connection.query(sqlReviews, [id], (err, resultReviews) => {
      if(err) return res.status(500).json({ error: `Errore nell'esecuzione della query: ${err}`})

        const movieWithReviews = {
          ...movie,
          reviews: resultReviews
        }

        //movie.reviews = resultReviews;
        res.send(movieWithReviews);
        //res.send(movie)
    });

  })
}

module.exports ={
  index,
  show
}