import React, { useState, useEffect, Suspense,useCallback } from 'react';
import './Header.css';

const Logo = React.lazy(() => import('../Generic/Logo'));
const Header = () => {
   
 
    return (
        <>
                          
                        
    
  
            <div className="cityonnet_Header_xs d-block d-md-none">
                <div className="container-fluid ">
                    <div className="row">
                        <div className="headerleft col-6 ">
                            <i className="fas fa-list" ></i>

                           <Logo/>

                        </div>
                        <div className="headerright col-6">
                            
                        </div>
                    </div>
                    <div className="row">
                    
                        <div className="headersearch col-12">
                           
                            </div>
                        </div>
                    </div>
                </div>
           

            <div className="cityonnet_Header d-none d-md-block">
                <div className="container-fluid ">
                    <div className="row">
                        <div className="headerleft col-2 ">
                           
                            
                        </div>
                        <div className="headerright col-10">
                            
                        </div>
                    </div>
                </div>
            </div>
           
                <div className="cityonnet_Header_menu d-none d-md-block" >
                    <div className="container-fluid ">
                        <div className="row">
                            <div className="headersearch col-12">
                                <a className="col-2 categories px-2" href=""><i className="fas fa-list " /> All Categories </a>
                                <div className="col-5 searchinput">
                                    <button className="gobutton"><i className="fas fa-search" /></button>
                                   
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
          
           
        </>
    )
}

// https://cityonnet-api.herokuapp.com/v1/search/autocomplete

export default Header;