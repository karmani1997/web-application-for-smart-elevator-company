const {request} = require('./utils/app');
const {cleanUpDatabase, createElevator} = require('../utils/db');
const {expect} = require('./utils/chai');

describe('Test elevator endpoints', async () => {

  beforeEach(async ()=>{
    await cleanUpDatabase();
  });

  it('Should return 200 and elevator object', async () => {

    const fabricationNumber = '123';
    await createElevator({fabricationNumber: fabricationNumber});
    
    const response = await request.get(`/elevators/${fabricationNumber}`);
    console.log('response',JSON.stringify(response.body))
    
    expect(response).to.have.status(200);
    expect(response.body).to.have.property('fabricationNumber', fabricationNumber);
  
});


it('Should return 200 and elevator count', async () => {
    // Assuming you have a function to seed data in your database
    // Here, I'm using a mock function for the sake of the example
    // You should adjust this to your actual data setup
    const seedData = async () => {
      // Insert some elevator data into the database
      // This function should populate the database with test data
    };
    await seedData();
  
    const response = await request.get('/elevators/count');
    console.log('response', JSON.stringify(response.body));
    
    expect(response).to.have.status(200);
    //expect(response.body).to.have.property('count');
    
  });

  

  it('Should return 200 and elevators by state', async () => {
    // Assuming you have a function to seed data in your database
    // Here, I'm using a mock function for the sake of the example
    // You should adjust this to your actual data setup
    const seedData = async () => {
      // Insert some elevator data into the database with various states
      // This function should populate the database with test data
    };
    await seedData();
  
    const state = 'operational'; // Replace with the state you want to test
    const response = await request.get(`/elevators-list/${state}`);
    console.log('response', JSON.stringify(response.body));
  
    expect(response).to.have.status(200);
    //expect(response.body).to.be.an('array');

  });
  


});
