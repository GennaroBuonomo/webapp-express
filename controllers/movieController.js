//IMPORTO LA CONNESSIONE AL DB
const connection = require('../data/db.js');

//INDEX
const index = (req, res) => {
  console.log('Metodo index')
}

//SHOW
const show = (req, res) => {
  console.log("metodo show")
}

module.exports ={
  index,
  show
}