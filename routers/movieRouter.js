//IMPORTO EXPRESS
const express = require('express');

//IMPORTO ROUTER
const router = express.Router();

//IMPORTO IL CONTROLLER
const movieController = require("../controllers/movieController");

//DEFINIZIONE ROTTE
//INDEX
router.get('/', movieController.index);

//SHOW
router.get('/:id', movieController.show);

module.exports = router;