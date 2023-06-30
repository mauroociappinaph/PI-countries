const { Router } = require("express");
const {
  getAllCountriesHandler,
  getCountryByNameHandler,
  getCountryByIdHandler,
} = require("../handlers/handlerCountries");
const {
  validateIdCountry,
  validateNameCountry,
  validateAllCountries,
} = require("../middleware/countriesValidate");

const countriesRouter = Router();

countriesRouter.get("/", validateAllCountries,getAllCountriesHandler);
countriesRouter.get(
  "/:getCountryName",
  validateIdCountry,
  getCountryByIdHandler
);
countriesRouter.get(
  "/:name?=...",
  validateNameCountry,
  getCountryByNameHandler
);

module.exports = countriesRouter;
