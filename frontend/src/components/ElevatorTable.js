import React, { useState, useEffect } from 'react';
import { getConfig } from '../config';
import ElevatorDetailsPopup from './ElevatorDetailsPopup';

const ElevatorTable = ({ state }) => {
    const [elevatorList, setElevatorList] = useState([]);
    const [selectedElevator, setSelectedElevator] = useState(null);

    useEffect(() => {
        const fetchElevators = async (state) => {
            try {
                setElevatorList([]);
                const config = getConfig();
                const apiUrl = !state ? `${config.apiUrl}` : `${config.apiUrl}?state=${state}`;
                console.log({apiUrl,state})
                const response = await fetch(apiUrl);
                if (!response.ok) {
                throw new Error('Failed to fetch elevator list');
                }
                const data = await response.json();
                setElevatorList(data);
            } catch (error) {
                console.error('Error fetching elevator list:', error);
            }
        };

        fetchElevators(state);
    }, [state]);

    const openElevatorDetails = (elevator) => {
        setSelectedElevator(elevator);
      };
    
      const closeElevatorDetails = () => {
        setSelectedElevator(null);
      };
    
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
            {(elevatorList || []).map((elevator) => (
              <tr key={elevator.deviceIdentificationNumber} onClick={() => openElevatorDetails(elevator)}  className="elevator-row" >
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

      {/* Elevator details popup */}
      {selectedElevator && (
        <ElevatorDetailsPopup elevator={selectedElevator} onClose={closeElevatorDetails} />
      )}
    </div>
  );
};

export default ElevatorTable;
