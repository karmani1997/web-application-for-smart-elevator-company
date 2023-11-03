const {app}= require('./app');
const safeJsonStringify = require('safe-json-stringify');


const fatalErrorJsonify = (err) => safeJsonStringify({
  timestamp: new Date(),
  level: 'fatal',
  message: err.message,
  stack: err.stack,
});

console.log('Starting server');

// start express server
const server = app.listen(app.get('port'), ()=>{
  console.log('Server started', {
    port: app.get('port'),
    env: app.get('env'),
  });
});

// safe terminate if unable to accept more request
process.on('SIGTERM', ()=>{
  console.log('SIGTERM occurred, shutting down safely', new Date().toISOString()),
  server.close(()=> {
    process.exit(0);
  });
});

const IGNORE_UNHANDLED_REJECTION = ()=> process.env.IGNORE_UNHANDLED_REJECTION === 'true';

process.on('unhandledRejection', function(err) {
  console.error('unhandledRejection: ', fatalErrorJsonify(err));
  if (!IGNORE_UNHANDLED_REJECTION) process.exit(99);
});

process.on('uncaughtException', function(err) {
  console.error('uncaughtException: ', fatalErrorJsonify(err));
  process.exit(99);
});


module.exports = {server};
