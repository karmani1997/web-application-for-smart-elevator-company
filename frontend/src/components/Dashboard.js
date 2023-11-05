import React, { useState, useEffect } from 'react';
import BarChart from './BarChart';
import { getConfig } from '../config';
import { Link, Switch } from 'react-router-dom';
import ElevatorTable from './ElevatorTable';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [operationalCounts, setOperationalCounts] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [elevatorState, setElevatorState] = useState(null);
  const [elevatorList, setElevatorList] = useState([]);

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

      //fetch elevators
      fetchElevators();
      
  }, []);

  const handleCountClick = async (state) => {
    setElevatorState(state);
    const elevatorListForState = await fetchElevators(state);
    setElevatorList(elevatorListForState);
  };

  const handleElevatorClick = (elevatorId) => {
    //TODO: need to add more logic here for single elevator detail
    const elevatorDetails = fetchElevatorDetails(elevatorId);
  };

  const fetchElevators = async (state) => {
    try {
      const config = getConfig();
      const apiUrl = !state ? `${config.apiUrl}` : `${config.apiUrl}?state=${state}`;
      console.log({apiUrl,state})
      const response = await fetch(apiUrl);
      console.log({response})
      if (!response.ok) {
        throw new Error('Failed to fetch elevator list');
      }
      const data = await response.json();
      console.log({data})
      setElevatorList(data);
    } catch (error) {
      console.error('Error fetching elevator list:', error);
    }
  };

  const fetchElevatorDetails = async (elevatorId) => {
    try {
      const config = getConfig();
      const apiUrl = `${config.apiUrl}/elevators/${elevatorId}`;
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch elevator details');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching elevator details:', error);
      return {};
    }
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

            <br/>
            <hr/>

            {elevatorState ? (
              <ElevatorTable elevators={elevatorList} state={elevatorState} />
              ) : (
                <ElevatorTable elevators={elevatorList} />
              )
            }
           
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
