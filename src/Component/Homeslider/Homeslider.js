
import { Link } from "react-router-dom";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import'./Homeslider.css';

import React, { useState, useEffect, Suspense,useCallback } from 'react';

const Homeslider = () => {
  const [data, setData] = useState([]);
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
              
            } finally {
              
            }
          };
      
          fetchData();
        }, []); // Empty dependency array ensures this runs once on mount
      console.log(data);
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 8,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 6,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 5,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              initialSlide: 4
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          }
        ]
      };
      

    
      
    return(
        <>
        <Suspense>
        <div className="container-fluid homecategoryimage"> 
            <div className="row" style={{display:"flex"}}>
   

           
        {data.map((department,index)=>{
          
    var url="https://cityonnet-virtualmall.s3.ap-southeast-1.amazonaws.com/Homepage_category_slider_images/"+department.DepartmentId+".jpg";
            return(
              <div className="sliderbox" key={"slide"+department.DepartmentId} >
              <figure className="figure imgfig">              
                <Link className="nodesign" style={{ textDecoration: 'none' }} to={"/department/category/"+department.DepartmentId}>
                    <img src={url} className="figure-img img-fluid rounded" alt={department.DepartmentName} />
                    <figcaption className="figure-caption">{department.DepartmentName}</figcaption>
                </Link>
              </figure>
            </div>
            )
        })}
        
        
        </div>
        </div>
        </Suspense>
        </>
    )
} 

export default Homeslider;