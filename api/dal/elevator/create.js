const {Elevator} = require('../models');

const createElevator = async (elevatorData) => {
  const elevator = new Elevator({
    ...elevatorData,
  });
  return elevator.save();
};

module.exports = {
  createElevator,
};
