const mongoose = require('mongoose');
const {ElevatorDAL}= require('../api/dal');
/**
 * Cleans up all database models docs.
 * @return {Promise}
 */
const cleanUpDatabase = async () => Promise.all(Object.values(mongoose.connection.collections)
    .map((collection) => collection.deleteMany({})),
);

/**
 * Create new elevator
 * @param {object} data
 */
const createElevator = async (data) => await ElevatorDAL.insert(data);

/**
 * Create new elevators
 * @param {Array} elevatorsList
 */
const createElevators = async (elevatorsList) =>  await ElevatorDAL.insert(elevatorsList);

module.exports = {
  cleanUpDatabase,
  createElevator,
  createElevators
};
