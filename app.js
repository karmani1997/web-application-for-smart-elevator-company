require('dotenv').config();
const express = require('express');
const compression = require('compression');
const app = express();
app.set('port', process.env.PORT || 3000);

require('./config/mongoose');

app.use(compression());
app.use(express.json());
// app.use(requestLoggingMiddleware);
// app.use(responseLoggingMiddleware);

const {elevatorRouter} = require('./api/routes');

app.use('/elevators', elevatorRouter);
// app.use('/users',userRouter);
// app.use('/students',studentRouter);

// app.use(errorHandler);

module.exports = {
  app,
};
