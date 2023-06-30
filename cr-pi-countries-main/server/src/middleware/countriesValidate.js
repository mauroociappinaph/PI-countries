
const validateAllCountries = async (req, res, next) => {
  try {
    const allCountries = await getAllCountries();
    if (allCountries.length === 0) {
      throw new Error('No se encontraron países');
    }
    next();
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const validateIdCountry = (req, res, next) => {
    try {
      const expAlpha = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
      const { getCountryName } = req.params;
      if (getCountryName.length !== 3) throw new Error('Country identifier must be 3 characters long');
      if (!expAlpha.includes(getCountryName[0].toUpperCase()) || !expAlpha.includes(getCountryName[1].toUpperCase()) || !expAlpha.includes(getCountryName[2].toUpperCase())) throw new Error('Country identifier must be only letters');
      next();
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
    
  const validateNameCountry = (req, res, next) => {
  try {
    const arrayQuery = Object.getOwnPropertyNames(req.query);
    if (arrayQuery.length > 0)
      if (req.query.hasOwnProperty('name')) {
        const { name } = req.query;
        if (name.length === 0) throw new Error('Nombre no definido');
      } else throw new Error('Query Name does not Exist');
    next();
  } catch (error) {
    res.status(400).send(error.message);
  }
};
  
  module.exports = {
    validateIdCountry,
    validateNameCountry,
    validateAllCountries
  }