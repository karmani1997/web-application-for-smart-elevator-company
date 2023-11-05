const mongoose = require('mongoose');

const chartSchema = new mongoose.Schema({
  name: String,
  data: [{
    time: Date,
    door_cycles_count: Number,
    door_openings_count: Number,
    door_closings_count: Number,
    door_closed_count: Number,
    door_opened_count: Number,
  }],
});

const Chart = mongoose.model('Chart', chartSchema);

module.exports = Chart;
