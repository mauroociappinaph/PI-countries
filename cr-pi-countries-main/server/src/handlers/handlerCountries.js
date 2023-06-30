const {
  getAllCountries,
  getCountryName,
  getCountryById,
} = require("../Controllers/ControllerCountry");
  
const getAllCountriesHandler = async (req, res) => {
  try {
    const allCountries = await getAllCountries();
    if (allCountries.length === 0) {
      console.log('Países no encontrados');
    }
    res.status(200).send(allCountries);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(400).send(error.message);
  }
};

const getCountryByNameHandler = async (req, res) => {
  const { name } = req.query;
  try {
    const countries = await getCountryByName(name);
    if (countries.length === 0) {
      return res.status(404).send('No se encontraron países con ese nombre.');
    }
    return res.status(200).send(countries);
  } catch (error) {
    console.error('Error:', error.message);
    return res.status(400).send('Error al obtener los países.');
  }
};



const getCountryByIdHandler = async (req, res) => {
  const { getCountryName } = req.params;
  try {
    const country = await getCountryById(getCountryName);
    if (country === null) throw new Error('País no encontrado');
    console.log(country);
    res.status(200).send(country);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  getAllCountriesHandler,
  getCountryByNameHandler,
  getCountryByIdHandler,
};
