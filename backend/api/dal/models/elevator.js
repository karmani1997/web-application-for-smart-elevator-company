const mongoose = require('mongoose');

const elevatorSchema = new mongoose.Schema({
  fabricationNumber: String,
  address: String,
  floorNumber: Number,
  deviceIdentificationNumber: String,
  manufacturerName: String,
  productionYear: Number,
  elevatorType: String,
  state: String,
  warningMessage: String, // Optional, only for elevators with 'warning' state
  reason: String, // Optional, only for elevators with 'out-of-order' state
  chart: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chart', // Reference to the Chart model
  },
});

const Elevator = mongoose.model('Elevator', elevatorSchema);

module.exports = Elevator;
