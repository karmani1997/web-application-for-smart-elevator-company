const {request} = require('./utils/app');
const {cleanUpDatabase, createElevator, createElevators} = require('../utils/db');
const {expect} = require('./utils/chai');

describe('Test elevator endpoints', async () => {
  beforeEach(async ()=>{
    await cleanUpDatabase();
  });

  it('Should return 200 and elevator object', async () => {
    const fabricationNumber = '123';
    await createElevator({fabricationNumber: fabricationNumber});

    const response = await request.get(`/elevators/${fabricationNumber}`);

    expect(response).to.have.status(200);
    expect(response.body).to.have.property('fabricationNumber', fabricationNumber);
  });


  it('Should return 200 and elevator count', async () => {
    const data = [
      {
        'fabricationNumber': 'FAB139',
        'address': 'Mannheim, Germany',
        'floorNumber': 2,
        'deviceIdentificationNumber': 'DIN472',
        'manufacturerName': 'Schindler',
        'productionYear': 2029,
        'elevatorType': 'Freight',
        'state': 'warning',
        'warningMessage': 'Noise detected during operation',
      },
      {
        'fabricationNumber': 'FAB141',
        'address': 'Karlsruhe, Germany',
        'floorNumber': 7,
        'deviceIdentificationNumber': 'DIN473',
        'manufacturerName': 'KONE',
        'productionYear': 2030,
        'elevatorType': 'Passenger',
        'state': 'out-of-order',
        'reason': 'Overheating detected',
      },
      {
        'fabricationNumber': 'FAB141',
        'address': 'Karlsruhe, Germany',
        'floorNumber': 7,
        'deviceIdentificationNumber': 'DIN473',
        'manufacturerName': 'KONE',
        'productionYear': 2030,
        'elevatorType': 'Passenger',
        'state': 'out-of-order',
        'reason': 'Overheating detected',
      },
      {
        'fabricationNumber': 'FAB141',
        'address': 'Karlsruhe, Germany',
        'floorNumber': 7,
        'deviceIdentificationNumber': 'DIN473',
        'manufacturerName': 'KONE',
        'productionYear': 2030,
        'elevatorType': 'Passenger',
        'state': 'out-of-order',
        'reason': 'Overheating detected',
      },
      {
        'fabricationNumber': 'FAB142',
        'address': 'Karlsruhe, Germany',
        'floorNumber': 7,
        'deviceIdentificationNumber': 'DIN473',
        'manufacturerName': 'KONE',
        'productionYear': 2030,
        'elevatorType': 'Passenger',
        'state': 'operational',
        'reason': 'Overheating detected',
      },
      {
        'fabricationNumber': 'FAB142',
        'address': 'Karlsruhe, Germany',
        'floorNumber': 7,
        'deviceIdentificationNumber': 'DIN473',
        'manufacturerName': 'KONE',
        'productionYear': 2030,
        'elevatorType': 'Passenger',
        'state': 'operational',
        'reason': 'Overheating detected',
      },
    ];
    await createElevators(data);
    const response = await request.get('/elevators/count');

    expect(response).to.have.status(200);
    expect(response.body).to.have.lengthOf(3);
    response.body.forEach((item)=> {
      if (item.state==='warning') {
        expect(item.count).to.equal(1);
      }

      if (item.state==='out-of-order') {
        expect(item.count).to.equal(3);
      }

      if (item.state==='operational') {
        expect(item.count).to.equal(2);
      }
    });
  });


  it('Should return 200 and elevator count', async () => {
    const data = [
      {
        'fabricationNumber': 'FAB139',
        'address': 'Mannheim, Germany',
        'floorNumber': 2,
        'deviceIdentificationNumber': 'DIN472',
        'manufacturerName': 'Schindler',
        'productionYear': 2029,
        'elevatorType': 'Freight',
        'state': 'warning',
        'warningMessage': 'Noise detected during operation',
      },
      {
        'fabricationNumber': 'FAB141',
        'address': 'Karlsruhe, Germany',
        'floorNumber': 7,
        'deviceIdentificationNumber': 'DIN473',
        'manufacturerName': 'KONE',
        'productionYear': 2030,
        'elevatorType': 'Passenger',
        'state': 'out-of-order',
        'reason': 'Overheating detected',
      },
      {
        'fabricationNumber': 'FAB141',
        'address': 'Karlsruhe, Germany',
        'floorNumber': 7,
        'deviceIdentificationNumber': 'DIN473',
        'manufacturerName': 'KONE',
        'productionYear': 2030,
        'elevatorType': 'Passenger',
        'state': 'out-of-order',
        'reason': 'Overheating detected',
      },
      {
        'fabricationNumber': 'FAB142',
        'address': 'Karlsruhe, Germany',
        'floorNumber': 7,
        'deviceIdentificationNumber': 'DIN473',
        'manufacturerName': 'KONE',
        'productionYear': 2030,
        'elevatorType': 'Passenger',
        'state': 'operational',
        'reason': 'Overheating detected',
      },

    ];
    await createElevators(data);
    const state = 'out-of-order';
    const response = await request.get(`/elevators/elevators-list/${state}`);

    expect(response).to.have.status(200);
    expect(response.body).to.have.lengthOf(2);
  });


  it('Should return 200 and elevator count', async () => {
    const data = [
      {
        'fabricationNumber': 'FAB139',
        'address': 'Mannheim, Germany',
        'floorNumber': 2,
        'deviceIdentificationNumber': 'DIN472',
        'manufacturerName': 'Schindler',
        'productionYear': 2029,
        'elevatorType': 'Freight',
        'state': 'warning',
        'warningMessage': 'Noise detected during operation',
      },
      {
        'fabricationNumber': 'FAB139',
        'address': 'Mannheim, Germany',
        'floorNumber': 2,
        'deviceIdentificationNumber': 'DIN472',
        'manufacturerName': 'Schindler',
        'productionYear': 2029,
        'elevatorType': 'Freight',
        'state': 'warning',
        'warningMessage': 'Noise detected during operation',
      },
      {
        'fabricationNumber': 'FAB141',
        'address': 'Karlsruhe, Germany',
        'floorNumber': 7,
        'deviceIdentificationNumber': 'DIN473',
        'manufacturerName': 'KONE',
        'productionYear': 2030,
        'elevatorType': 'Passenger',
        'state': 'out-of-order',
        'reason': 'Overheating detected',
      },
      {
        'fabricationNumber': 'FAB141',
        'address': 'Karlsruhe, Germany',
        'floorNumber': 7,
        'deviceIdentificationNumber': 'DIN473',
        'manufacturerName': 'KONE',
        'productionYear': 2030,
        'elevatorType': 'Passenger',
        'state': 'out-of-order',
        'reason': 'Overheating detected',
      },
      {
        'fabricationNumber': 'FAB142',
        'address': 'Karlsruhe, Germany',
        'floorNumber': 7,
        'deviceIdentificationNumber': 'DIN473',
        'manufacturerName': 'KONE',
        'productionYear': 2030,
        'elevatorType': 'Passenger',
        'state': 'operational',
        'reason': 'Overheating detected',
      },

    ];
    await createElevators(data);

    const response = await request.get('/elevators');

    expect(response).to.have.status(200);
    expect(response.body).to.have.lengthOf(5);
  });
});
