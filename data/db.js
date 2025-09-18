//IMPORTO MYSQL2
const mysql = require("mysql2");

//CREO LA CONNESSIONE
const connection = mysql.createConnection({
  host: "boolean",
  user: "root",
  password: "Root",
  database: "db_movies"
});

//STABILISCO LA CONNESSIONE
connection.connect((err) => {
  if(err){
    console.log(`Errore nella connessione al db: ${err}`)
  }
  else{
    console.log("Connessione al db avvenuta correttamente")
  }
})