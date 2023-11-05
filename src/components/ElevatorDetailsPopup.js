import React from 'react';

const ElevatorDetailsPopup = ({ elevator, onClose }) => {
  return (
    <div className="elevator-details-popup">
      <button className="close-button" onClick={onClose}>
        Close
      </button>
      <div className="elevator-details-content">
        <h2>Elevator Details</h2>
        <div className="elevator-value">
          <span className="elevator-label">Address:</span>
          {elevator.address}
        </div>
        <div className="elevator-value">
          <span className="elevator-label">Device ID:</span>
          {elevator.deviceIdentificationNumber}
        </div>
        <div className="elevator-value">
          <span className="elevator-label">Elevator Type:</span>
          {elevator.elevatorType}
        </div>
        <div className="elevator-value">
          <span className="elevator-label">Fabrication Number:</span>
          {elevator.fabricationNumber}
        </div>
        <div className="elevator-value">
          <span className="elevator-label">Floor Number:</span>
          {elevator.floorNumber}
        </div>
        <div className="elevator-value">
          <span className="elevator-label">Manufacturer Name:</span>
          {elevator.manufacturerName}
        </div>
        <div className="elevator-value">
          <span className="elevator-label">Production Year:</span>
          {elevator.productionYear}
        </div>
        <div className="elevator-value">
          <span className="elevator-label">State:</span>
          {elevator.state}
        </div>
        {/* Add more details as needed */}
      </div>
    </div>
  );
};

export default ElevatorDetailsPopup;
