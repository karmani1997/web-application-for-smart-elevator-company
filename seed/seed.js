const {Elevator} = require('../api/models')

//import json files
const seedDataPath_1 = require('../jsonData/elevate-industires.json');
const seedDataPath_2 = require('../jsonData/skyward-peaks.json');


async function seedData() {

  try {
    // Insert seed data into the database
    await Elevator.insertMany(seedDataPath_1);
    await Elevator.insertMany(seedDataPath_2);

    console.log('data seeding successfully.');
  } catch (error) {
    console.error('Error in dataata seeding:', error);
  }
  
}

seedData();
