const {Elevator} = require('../models');

const getElevators = async () => await Elevator.find({}).populate('chart');

const getElevatorByFabricationNumber = async (id) => await Elevator.findOne({'fabricationNumber': id}).populate('chart');

const getAllElevatorsCount = async () => {
  return await Elevator.aggregate([
    {
      $group: {
        _id: '$state',
        count: {$sum: 1},
      },
    },
    {
      $project: {
        state: '$_id',
        count: 1,
        _id: 0,
      },
    },
  ]).exec();
};


const getAllElevatorsByState = async (state) => await Elevator.find({'state': state}).populate('chart');

const getElevatorsRecentlyVisited = async (state) => {
  return await Elevator.aggregate([
    {
      $match: {state: state},
    },
    {
      $unwind: '$chart.data',
    },
    {
      $sort: {
        'chart.data.time': -1,
      },
    },
  ])
      .exec();
};

module.exports = {
  getElevators,
  getElevatorByFabricationNumber,
  getAllElevatorsCount,
  getElevatorsRecentlyVisited,
  getAllElevatorsByState,
};
