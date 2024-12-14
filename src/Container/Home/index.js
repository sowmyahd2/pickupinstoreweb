
import React, { useEffect, useState,Suspense,lazy} from 'react'
const Header = lazy(() => import('../../Component/Header/Header'));
const Footer =lazy(()=>import('../../Component/Footer/Footer'));
const Loader = React.lazy(() => import('../../Component/Loader'));
const Homeslider = lazy(() => import('../../Component/Homeslider/Homeslider'));
const Banner = lazy(() => import('../../Component/Banner/Banner'));
const Vertical = lazy(() => import('../../Component/Verticals/Verticals'));

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
         <div className="container-fluid">                                   
                <div className="row">
                    <div className="bannerhome col-lg-12 col-md-12 col-sm-12 col-12">                        
                    <Suspense fallback={<Loader />} ><Homeslider /></Suspense>
                    <Suspense fallback={<Loader />} ><Banner /></Suspense>
                   
                    </div>
                </div>
            </div>
            <div className="footerhr"></div>
            <Footer />
        
   
    </Suspense>
  )
}



export default Home