
import React, { useEffect, useState } from 'react';

const DataFetchingComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    let isMounted = true; // Track if component is mounted
    const fetchData = async () => {
      try {
        const response = await fetch('your-api-endpoint');
        const result = await response.json();
        if (isMounted) {
          setData(result); // Update state only if mounted
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    return () => {
      isMounted = false; // Set to false on cleanup
    };
  }, []); // Empty dependency array to run once on mount

  return (
    <div>
      <h1>Data Fetch Example</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
};

export default DataFetchingComponent;
