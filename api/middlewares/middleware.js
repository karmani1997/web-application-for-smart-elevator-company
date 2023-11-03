const requestLoggingMiddleware = (req, res, next) => {
  console.log(`requestLoggingMiddleware [${new Date().toISOString()}] ${req.method} ${req.originalUrl} :: headers: ${req.headers}, body: ${req.body}`);
  next();
}

const responseLoggingMiddleware= (req, res, next) => {
  const originalSend = res.send;
  res.send = function(data) {
    console.log(`responseLoggingMiddleware  [${new Date().toISOString()}] :: Response Body: ${data}`);
    originalSend.call(this, data);
  };
  next();
}

const errorHandler =  (err, req, res, next) => {
  console.error(`errorHandler [${new Date().toISOString()}]  error occurred: ${err.message}`);

  res.status(500);

  res.json({
    error: {
      message: err.message || 'An error occurred',
      stack: process.env.NODE_ENV === 'production' ? 'Error details are not available in production.' : err.stack
    }
  });
}


module.exports = {
  requestLoggingMiddleware,
  responseLoggingMiddleware,
  errorHandler
}