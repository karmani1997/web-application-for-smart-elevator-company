const mongoose = require('mongoose');

// Sub-schema for the chart data
const chartSchema = new mongoose.Schema({
    name: String,
    data: [{
      time: Date,
      door_cycles_count: Number,
      door_openings_count: Number,
      door_closings_count: Number,
      door_closed_count: Number,
      door_opened_count: Number
    }]
  });
  
  // Elevator Schema
  const elevatorSchema = new mongoose.Schema({
    fabricationNumber: String,
    address: String,
    floorNumber: Number,
    deviceIdentificationNumber: String,
    manufacturerName: String,
    productionYear: Number,
    elevatorType: String,
    state: String,
    warningMessage: String,  // Optional, only for elevators with 'warning' state
    reason: String,          // Optional, only for elevators with 'out-of-order' state
    chart: chartSchema
  });

const Elevator = mongoose.model('Elevator', elevatorSchema);

module.exports = Elevator
