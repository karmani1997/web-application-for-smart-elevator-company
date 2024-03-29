require('dotenv').config();
const express = require('express');
const compression = require('compression');
const app = express();
const cors = require('cors'); 


app.set('port', process.env.PORT || 3000);

require('./config/mongoose');

app.use(compression());
app.use(express.json());

const {elevatorRouter} = require('./api/routes');

app.use(cors({ origin: '*' }));


//health endpoint
app.get('/',(req,res)=> res.send({'status':'healthy'}));
//other routes
app.use('/elevators', elevatorRouter);
require('./seed/seed');
module.exports = {
  app,
};
