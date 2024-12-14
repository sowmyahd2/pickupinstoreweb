import React, {Suspense} from 'react'
import './Banner.css'
const Loader = React.lazy(() => import('../Loader'));

const Banner = () => {
    // const xs = lazy (() => URL=("https://cityonnet-virtualmall.s3.ap-southeast-1.amazonaws.com/Homepage_Banner_Images/scalable/Bannerhome586.webp"));
    // const small = lazy (() => URL=("https://cityonnet-virtualmall.s3.ap-southeast-1.amazonaws.com/Homepage_Banner_Images/scalable/Bannerhome410.webp"));
    // const medium = lazy (() => URL=("https://cityonnet-virtualmall.s3.ap-southeast-1.amazonaws.com/Homepage_Banner_Images/scalable/Bannerhome586.webp"));
    // const large = lazy (() => URL=("https://cityonnet-virtualmall.s3.ap-southeast-1.amazonaws.com/Homepage_Banner_Images/scalable/Bannerhome803.webp"));
    // const xlarge = lazy (() => URL=("https://cityonnet-virtualmall.s3.ap-southeast-1.amazonaws.com/Homepage_Banner_Images/scalable/Bannerhome1200.webp"));
    // const master = lazy (() => URL=("https://cityonnet-virtualmall.s3.ap-southeast-1.amazonaws.com/Homepage_Banner_Images/scalable/Bannerhome1300.webp"));
     
    return (
        <>
        <Suspense fallback={<Loader />} >
        {/* <div className="container-fluid homebannerimage "> 
            <div className="row">
            <LazyLoadImage
            sizes="(max-width: 1130px) 100vw, 1130px"
            src={xs} 
            srcSet={`${xs} 200w, ${small} 410w, ${medium} 586w, ${large} 803w, ${xlarge} 1120w, ${master} 1130w`}
            alt="" 
            className="img-fluid hmeban"
            width="1130px" height="320px" 
            as = {Image}
            
            /> 
            
            </div>
            </div> */}


<div className="container-fluid homebannerimage "> 
                <div className="row d-none d-md-block">            
                    <img src={require('../../../src/images/hmebanner1.webp')} className="img-fluid hmeban" alt="Banner" />
                </div>
                
            
            </div> 
            </Suspense>

            
        </>
    )
}

export default Banner;