//IMPORTO MYSQL2
const mysql = require("mysql2");

//CREO LA CONNESSIONE
const connection = mysql.createConnection({
  host: process.env.DB_HOST || "boolean",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

//STABILISCO LA CONNESSIONE
connection.connect((err) => {
  if(err){
    console.log(`Errore nella connessione al db: ${err}`)
  }
  else{
    console.log("Connessione al db avvenuta correttamente")
  }
});

module.exports = connection;