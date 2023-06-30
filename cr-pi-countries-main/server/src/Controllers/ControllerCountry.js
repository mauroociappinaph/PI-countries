const { Op } = require('sequelize');
const { Country, Activity } = require('../db');

const getAllCountries = async () => {
  const countries = await Country.findAll({
    include: {
      model: Activity,
      attributes: ['id', 'name'],
      through: {
        attributes: [],
      },
    },
  });
  return countries;
};

const getCountryById = async (countryId) => {
  try {
    const country = await Country.findByPk(countryId.toUpperCase(), {
      include: {
        model: Activity,
        attributes: ['id', 'name'],
        through: {
          attributes: [],
        },
      },
    });
    if (!country) {
      throw new Error('País no encontrado');
    }
    return country;
  } catch (error) {
    throw error;
  }
};

const getCountryByName = async (name) => {
  const country = await Country.findAll({
  where: { name: {[Op.iLike]: `%${name}%` }},
  include: {
    model: Activity, 
    attibutes : ['id', 'name'],
    through: {
      attibutes: [],
    },
  }});
  return country;
}


module.exports = {
  getAllCountries,
  getCountryById,
  getCountryByName
};
