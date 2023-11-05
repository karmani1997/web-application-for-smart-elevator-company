import React, { useState, useEffect } from 'react';
import BarChart from './BarChart';
import { getConfig } from '../config';
import { Link } from 'react-router-dom';
import ElevatorTable from './ElevatorTable';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [operationalCounts, setOperationalCounts] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [elevatorState, setElevatorState] = useState(null);

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
            <div>Out of Service:  <Link onClick={() => handleCountClick('out-of-order')}>{operationalCounts['out-of-order']}</Link></div>
            <br/>
            <BarChart data={data} />

            <br/>
            <hr/>

            <ElevatorTable state={elevatorState} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
