//IMPORTO EXPRESS
const express = require('express');

// IMPORTO IL PACCHETTO CORS
const cors = require('cors');

//Importo il middleware per i path delle imgs
const imagePathMiddleware = require('./middlewares/imagePathMiddleware');


// CREO L'ISTANZA DELL'APP ATTRAVERSO IL METODO EXPRESS CHE HO IMPORTATO
const app = express();

//DEFINISCO IL NUMERO DELLA PORTA SU CUI DEVE GIRARE L'APPLICAZIONE
const port = process.env.PORT

//IMPORTO IL ROUTER 
const movieRouter = require("./routers/movieRouter.js");

app.use(express.static('public'));

//REGISTRO IL PACCHETTO PER L USO
app.use(cors({origin: process.env.FE_APP}));

app.use(imagePathMiddleware);

app.use(express.json());

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












