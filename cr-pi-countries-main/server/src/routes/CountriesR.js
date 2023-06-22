const { Router } = require("express");
const { getDbAllCountries } = require("../Controllers/countriesControllers")

const countriesRouter = Router();

countriesRouter.get("/", getDbAllCountries);


module.exports = countriesRouter; 