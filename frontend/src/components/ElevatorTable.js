import React from 'react';

const ElevatorTable = ({ elevators, state }) => {
  return (
    <div>
      <h2>
        {!state ? 'All Elevators' : `Elevators of state: ${state}`}
      </h2>
      <div className="table-container">
        <table className="elevator-table">
          <thead>
            <tr>
              <th>Address</th>
              <th>Device ID</th>
              <th>Elevator Type</th>
              <th>Fabrication Number</th>
              <th>Floor Number</th>
              <th>Manufacturer Name</th>
              <th>Production Year</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            {elevators.map((elevator) => (
              <tr key={elevator.deviceIdentificationNumber}>
                <td>{elevator.address}</td>
                <td>{elevator.deviceIdentificationNumber}</td>
                <td>{elevator.elevatorType}</td>
                <td>{elevator.fabricationNumber}</td>
                <td>{elevator.floorNumber}</td>
                <td>{elevator.manufacturerName}</td>
                <td>{elevator.productionYear}</td>
                <td>{elevator.state}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ElevatorTable;
