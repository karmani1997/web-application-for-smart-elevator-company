const {app}= require('./app');
const safeJsonStringify = require('safe-json-stringify');

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const yaml = require('js-yaml');
const fs = require('fs');



const fatalErrorJsonify = (err) => safeJsonStringify({
  timestamp: new Date(),
  level: 'fatal',
  message: err.message,
  stack: err.stack,
});



// Load and parse the Swagger YAML file
const swaggerDocument = yaml.load(fs.readFileSync('swagger.yaml', 'utf8'));

// Set up Swagger documentation
const options = {
  swaggerDefinition: swaggerDocument,
  apis: ['./api/routes/*.js'], // Specify the path to your API routes
};

const specs = swaggerJsdoc(options);

// Serve the Swagger UI on a specific route
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(specs));


// start express server
console.log('Starting server');
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

