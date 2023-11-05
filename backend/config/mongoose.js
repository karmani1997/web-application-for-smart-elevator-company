const mongoose = require('mongoose');
const connectMongoose = require('./connectMongoose');
mongoose.Promise = Promise;

connectMongoose();

mongoose.set('debug', process.env.MONGOOSE_DEBUGER === 'true');
// CONNECTION EVENTS
mongoose.connection.once('open', () => {
  console.log('Mongoose default connection connected');
});

mongoose.connection.on('error', (err) => {
  console.error('Mongoose default connection error ', err);
  process.exit(1);
});

// When successfully connected
mongoose.connection.on('connected', () => {
  console.log(`Mongoose default connection open to ${process.env.MONGO_URL}`);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose default connection disconnected');
});

module.exports = mongoose;
