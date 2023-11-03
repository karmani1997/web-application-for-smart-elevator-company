const express = require('express')
const app = express()

//const {requestLoggingMiddleware, responseLoggingMiddleware, errorHandler} = require('./middlewares/middleware');

app.use(express.json());
//app.use(requestLoggingMiddleware);
//app.use(responseLoggingMiddleware);

//const {userRouter, studentRouter} = require('./routes');

//app.use('/users',userRouter);
//app.use('/students',studentRouter);

//app.use(errorHandler);

module.exports = {
    app
}
