import React, { useEffect, useState } from 'react';

const FetchDataExample = () => {
  // State to hold data and loading/error states
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data when the component mounts
  useEffect(() => {
    // Sample API endpoint
    const url = 'https://radiancelooks.com/reactapi/public/index.php/api/department';

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs once on mount

  // Render loading, error, or data
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Fetched Data</h1>
      <ul>
        {data.slice(0, 10).map((item) => (
          <li key={item.DepartmentId}>
            <strong>{item.DepartmentName}</strong>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchDataExample;
