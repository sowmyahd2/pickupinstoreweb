import React from 'react'
import './Generic.css';
import { Link } from 'react-router-dom';


const Logo = () => {
    return(
        <>
                <div className="logo col-6 d-block -md-none">
        <Link to="/">
        
        <img width="90px" height="313px" src={require('../../../src/images/picklogo.jpg')} alt="price,availability,store" alt="this is car image" />
        </Link>
        </div>
        
        
        </>
    )
}

export default Logo;