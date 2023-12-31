const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countriesRouter = require("./country.js");
const activitiesRouter = require("./activities.js");


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/countries', countriesRouter);  //Va al ID y Name de países.
router.use('/activities', activitiesRouter);

module.exports = router;
