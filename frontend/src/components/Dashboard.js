import React, { useState, useEffect } from 'react';
import BarChart from './BarChart';
import { getConfig } from '../config';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

// const Dashboard = () => {
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const config = getConfig();
//     const apiUrl = config.apiUrl+'/count';

//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((result) => {
//         setData(result);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//         setIsLoading(false);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Dashboard</h1>
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         <BarChart data={data} />
//       )}
//     </div>
//   );
// };

// export default Dashboard;


const Dashboard = () => {
  const [data, setData] = useState([]);
  const [operationalCounts, setOperationalCounts] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [elevatorState, setElevatorState] = useState(null);
  const [elevatorList, setElevatorList] = useState([]);
  const [recentlyVisitedElevators, setRecentlyVisitedElevators] = useState([]);

  useEffect(() => {
    const config = getConfig();
    const apiUrl = config.apiUrl + '/count';

    fetch(apiUrl)
      .then((response) => response.json())
      .then((result) => {
        const operationalCountResult = {};
        result.forEach((item)=>{
          operationalCountResult[item.state]=item.count;
        });
        setData(result);
        setOperationalCounts(operationalCountResult);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);

  const handleCountClick = (state) => {
    setElevatorState(state);
    const elevatorListForState = fetchElevatorListByState(state);
    setElevatorList(elevatorListForState);
  };

  const handleElevatorClick = (elevatorId) => {
    // Handle click on a specific elevator to display its details
    // Replace with your logic to fetch elevator details
    // For example, make an API call to retrieve the details
    const elevatorDetails = fetchElevatorDetails(elevatorId);

    // Update the recently visited elevators list
    setRecentlyVisitedElevators((prevList) => [elevatorDetails, ...prevList]);
  };

  const fetchElevatorListByState = (state) => {
    // Replace this with your data fetching logic to get the list of elevators by state
    // Example: Make an API call to fetch elevators by state
    // Return the list of elevators for the specified state
  };

  const fetchElevatorDetails = (elevatorId) => {
    // Replace this with your data fetching logic to get elevator details by ID
    // Example: Make an API call to fetch elevator details
    // Return the details of the specified elevator
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <h2>Counts of Elevators</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div>
          <div>Operational:  <Link onClick={() => handleCountClick('operational')}>{operationalCounts['operational']}</Link></div>
            <div>Warning:  <Link onClick={() => handleCountClick('warning')}>{operationalCounts['warning']}</Link></div>
            <div>Out of Service:  <Link onClick={() => handleCountClick('outOfService')}>{operationalCounts['out-of-order']}</Link></div>
            <br/>
            <BarChart data={data} />
          </div>
        )}
      </div>
      <br/>
      <hr/>
      <div>
        <h2>Recently Visited Elevators</h2>
        <ul>
          {recentlyVisitedElevators.map((elevator) => (
            <li
              key={elevator.id}
              onClick={() => handleElevatorClick(elevator.id)}
            >
              {elevator.name}
            </li>
          ))}
        </ul>
      </div>

      {elevatorState && (
        <div>
          <h2>Elevators in {elevatorState} State</h2>
          <ul>
            {elevatorList.map((elevator) => (
              <li
                key={elevator.id}
                onClick={() => handleElevatorClick(elevator.id)}
              >
                {elevator.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
