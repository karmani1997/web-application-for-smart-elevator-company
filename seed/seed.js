const {ElevatorDAL, ChartDAL} = require('../api/dal');
const Chart = require('../api/dal/models');

// import json files
const industires = require('./elevate-industires.json');
const skyward = require('./skyward-peaks.json');

/**
 * this function will only run on application startup and dump the sample data.
 */
async function seedData() {
  try {
    console.log('data seeding to be started');
    const tobeSeededData = industires.concat(skyward)
    tobeSeededData.forEach(async (item)=> {
      const chart = await ChartDAL.createChart(item.chart);
      await ElevatorDAL.createElevator({
        ...item,
        chart: chart,
      });
    });
    console.log('data seeding successfully.');
  } catch (error) {
    console.error('Error in dataata seeding:', error);
  }
}

seedData();
