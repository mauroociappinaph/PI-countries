const { getDbAllCountries } = require("../Controllers/countriesControllers");

const countriesHandlers = async (req, res) => {
  try {
    let { name } = req.params;
    let countries = [];
    if (name) {
      countries = await getDbAllCountries().then((data) => {
        countries = data.filter((country) => {
          return country.name.toLowerCase().includes(name.toLowerCase());
        });
        if (countries.length === 0) {
          console.log("No se encontró ningún país con ese nombre");
          res.status(404).send({ message: "No se encontró ningún país con ese nombre" });
        } else {
          console.log("Países encontrados:", countries);
          res.status(200).json(countries);
        }
      });
    } else {
      countries = await getDbAllCountries();
      console.log("Todos los países:", countries);
      return res.status(200).json(countries);
    }
  } catch (error) {
    console.error(error);
    res.status(400).send();
  }
};

module.exports = countriesHandlers;
