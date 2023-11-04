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
const createElevator = async (data) => {
  const elevator = await ElevatorDAL.createElevator(data);
  return elevator.save();
};

module.exports = {
  cleanUpDatabase,
  createElevator,
};
