const {Elevator} = require('../models');

/**
 * 
 * @param {object | Array} data 
 * @returns 
 */
const insert = async (data) => await Elevator.create(data)

module.exports = {
  insert
};
