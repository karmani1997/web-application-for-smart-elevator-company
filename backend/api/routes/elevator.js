const router = require('express').Router();
const elevatorController = require('../controllers/elevator.js');


// Retrieve a list of all elevators.
router.get('/', elevatorController.getElevators);


// Retrieve counts of elevators by state (operational, warning, out-of-service).
router.get('/count', elevatorController.getAllElevatorsCount);

// Retrieve a list of recently visited elevators.
router.get('/recently-visited', elevatorController.getElevatorsRecentlyVisited);

// Retrieve a list of elevators in a specific state (e.g., operational, warning, or out-of-service).
router.get('/elevators-list/:state', elevatorController.getAllElevatorsByState);

// Retrieve details of a specific elevator by its fabrication number.
router.get('/:id', elevatorController.getElevatorById);

module.exports = router;

