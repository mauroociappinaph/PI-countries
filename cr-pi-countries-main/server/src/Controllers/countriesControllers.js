const { Activity, Country } = require("../db");

const getDbAllCountries = async () => {
  try {
    const countries = await Country.findAll({
      include: {
        model: Activity,
        attributes: ["id", "name"],
        through: {
          attributes: [],
        },
      },
    });
    return countries;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

getDbAllCountries()
  .then((countries) => {
    console.log(countries);
  })
  .catch((error) => {
    console.error(error);
  });

module.exports = {
  getDbAllCountries,
};
