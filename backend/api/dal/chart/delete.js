const {Chart} = require('../models');

const deleteMany = async () => await Chart.deleteMany({});

module.exports = {
    deleteMany,
};
