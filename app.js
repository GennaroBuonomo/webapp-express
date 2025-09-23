//IMPORTO EXPRESS
const express = require('express');
const connection = require('./data/db.js');

// IMPORTO IL PACCHETTO CORS
const cors = require('cors')
// CREO L'ISTANZA DELL'APP ATTRAVERSO IL METODO EXPRESS CHE HO IMPORTATO
const app = express();
//DEFINISCO IL NUMERO DELLA PORTA SU CUI DEVE GIRARE L'APPLICAZIONE
const port = process.env.PORT

//IMPORTO IL ROUTER 
const movieRouter = require("./routers/movieRouter.js");

//REGISTRO IL PACCHETTO PER L USO
app.use(cors({origin: process.env.FE_APP}))

app.use(express.static('public'));

//DEFINISCO LA ROTTA BASE
app.get("/", (req, res) => {
  res.send("Rotta base per il mio blog")
});

//DEFINISCO LE ROTTE PERI I FILM
app.use("/api/movies", movieRouter);

//INDICO AL SERVER DI RESTARE IN ASCOLTO SULLA PORTA 3000
app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`)
})