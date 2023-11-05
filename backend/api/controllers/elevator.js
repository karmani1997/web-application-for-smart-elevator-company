const {ElevatorDAL} = require('../dal');


const getElevators = async (req, res) => {
  try {
    const elevators = await ElevatorDAL.getElevators();
    res.status(200).json(elevators);
  } catch (error) {
    res.status(500);
  }
};

const getElevatorById = async (req, res) => {
  try {
    const {id} = req.params;
    const elevator = await ElevatorDAL.getElevatorByFabricationNumber(id);
    res.status(200).json(elevator);
  } catch (error) {
    res.status(500);
  }
};


const getAllElevatorsCount = async (req, res) => {
  try {
    const result = await ElevatorDAL.getAllElevatorsCount();
    res.status(200).json(result);
  } catch (error) {
    res.status(500);
  }
};


const getElevatorsRecentlyVisited = async (req, res) => {
  try {
    const {state} = req.params;
    const elevators = await ElevatorDAL.getElevatorsRecentlyVisited(state);
    res.status(200).json(elevators);
  } catch (error) {
    res.status(500);
  }
};

const getAllElevatorsByState = async (req, res) => {
  try {
    const {state} = req.params;
    const elevators = await ElevatorDAL.getAllElevatorsByState(state);
    res.status(200).json(elevators);
  } catch (error) {
    res.status(500);
  }
};


module.exports = {
  getElevators,
  getElevatorById,
  getAllElevatorsCount,
  getElevatorsRecentlyVisited,
  getAllElevatorsByState,
};
