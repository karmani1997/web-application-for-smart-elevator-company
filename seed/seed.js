const {Elevator} = require('../api/models');

// import json files
const seedDataPath1 = require('../jsonData/elevate-industires.json');
const seedDataPath2 = require('../jsonData/skyward-peaks.json');

/**
 * this function will only run on application startup and dump the sample data.
 */
async function seedData() {
  try {
    // Insert seed data into the database

    // Check if the collection already exists
    const collectionExists = await Elevator.exists();

    // If the collection exists, drop it
    if (collectionExists) {
      await Elevator.collection.drop();
      console.log('Collection dropped.');
    }

    await Elevator.insertMany(seedDataPath1);
    await Elevator.insertMany(seedDataPath2);

    console.log('data seeding successfully.');
  } catch (error) {
    console.error('Error in dataata seeding:', error);
  }
}

seedData();
