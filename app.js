//IMPORTO EXPRESS
const express = require('express');
// CREO L'ISTANZA DELL'APP ATTRAVERSO IL METODO EXPRESS CHE HO IMPORTATO
const app = express();
//DEFINISCO IL NUMERO DELLA PORTA SU CUI DEVE GIRARE L'APPLICAZIONE
const port = 3000

//DEFINISCO LA ROTTA BASE
app.get("/", (req, res) => {
  res.send("Rotta base per il mio blog")
});

//INDICO AL SERVER DI RESTARE IN ASCOLTO SULLA PORTA 3000
app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`)
})