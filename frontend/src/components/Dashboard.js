import React, { useState, useEffect } from 'react';
import BarChart from './BarChart';
import { getConfig } from '../config';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const config = getConfig();
    const apiUrl = config.apiUrl+'/count';

    fetch(apiUrl)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <BarChart data={data} />
      )}
    </div>
  );
};

export default Dashboard;
