const {Chart} = require('../models');

const insert = async (item) => await Chart.create(item);

module.exports = {
  insert,
};
