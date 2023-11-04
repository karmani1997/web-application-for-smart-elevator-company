const {Chart} = require('../models');

const createChart = async (data) => {
  const chart = new Chart(data);
  return chart.save();
};

module.exports = {
  createChart,
};
