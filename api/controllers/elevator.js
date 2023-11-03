// elevatorController.js
const {Elevator} = require('../models');

// get Elevators
const getElevators = async (req, res) => {
  try {
    const elevators = await Elevator.find({});
    console.log(elevators);
    res.status(200).json(elevators);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
};

// get Elevator by id (TODO:// by fabricated number)
const getElevatorById = async (req, res) => {
  try {
    const {id} = req.params;
    const elevator = await Elevator.find({'fabricationNumber': id});
    // console.log(id)

    res.status(200).json(elevator);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
};

// get Elevator count by state

const getAllElevatorsCount = async (req, res) => {
  try {
    const result = await Elevator.aggregate([
      {
        $group: {
          _id: '$state',
          count: {$sum: 1},
        },
      },
    ]).exec();
    console.log({result});
    res.status(200).json(result);
  } catch (error) {
    res.status(500);
    // throw new Error(error.message);
  }
};


// get Elevator count Recently Visited
const getElevatorsRecentlyVisited = async (req, res) => {
  try {
    const {state} = req.params;
    const elevators = await Elevator.aggregate(
        [
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
        ],

    ).exec();

    res.status(200).json(elevators);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
};

// get Elevator count Recently Visited
const getElevatorsCountByState = async (req, res) => {
  try {
    const {state} = req.params;
    console.log(state);


    const result = await Elevator.aggregate([
      {
        $match: {
          state: state,
        },
      },
      {
        $group: {
          _id: '$state',
          count: {$sum: 1},
        },
      },
    ]);

    console.log(result);
    res.status(200).json(result);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
};


const getAllElevatorsByState = async (req, res) => {
  try {
    const {state} = req.params;
    const elevators = await Elevator.find({'state': state});
    // console.log(id)

    res.status(200).json(elevators);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
};


module.exports = {
  getElevators,
  getElevatorById,
  getAllElevatorsCount,
  getElevatorsRecentlyVisited,
  getElevatorsCountByState,
  getAllElevatorsByState,
};
