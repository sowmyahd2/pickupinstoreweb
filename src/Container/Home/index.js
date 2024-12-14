
import React, { useEffect, useState,Suspense,lazy} from 'react'
const Header = lazy(() => import('../../Component/Header/Header'));

const Home = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
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
  
    
    useEffect(() => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
          
            (position) => {
               
             console.log(position);
            },
            (error) => {
              console.log(error.message);
            }
          );
        } else {
          console.log('Geolocation is not supported by this browser.');
        }
      }, []);
  return (
    <Suspense>
         <Header/>
         <h1>Fetched Data</h1>
      <ul>
        {data.slice(0, 10).map((item) => (
          <li key={item.DepartmentId}>
            <strong>{item.DepartmentName}</strong>
            
          </li>
        ))}
      </ul>
   
    </Suspense>
  )
}



export default Home