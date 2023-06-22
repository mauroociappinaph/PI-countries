const { Router } = require("express");
const  countriesRouter  = require("../routes/CountriesR");

const mainRouter = Router();

mainRouter.use("/countries", countriesRouter);


module.exports = mainRouter;
