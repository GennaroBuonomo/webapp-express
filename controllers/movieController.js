//IMPORTO LA CONNESSIONE AL DB
const connection = require('../data/db.js');

//INDEX
const index = (req, res) => {
  const sql = "SELECT * FROM movies";

  connection.query(sql, (err,results) => {
    if(err) return res.status(500).json({error: `Errore nell?esecuzione della query: ${err}`})
      
    res.send(results);
  })
}

//SHOW
const show = (req, res) => {
  console.log("metodo show")
}

module.exports ={
  index,
  show
}