const {Elevator} = require('../models');

const deleteMany = async () => await Elevator.deleteMany({});

module.exports = {
    deleteMany
};
