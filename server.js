require('dotenv').config();

const mongoose = require('mongoose');
const {app} = require('./app')

const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT

// Connect to the MongoDB database
mongoose.connect(MONGO_URL)
.then(() => {

    // Import and run the seed script
    require('./seed/seed.js');

    // Start the API server
    app.listen(PORT, () => {
        console.log(`app is listening on port ${PORT}`)
    });
    
})
.catch((error) => {
    console.log(error)
});


