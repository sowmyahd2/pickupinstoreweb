import React, { useState, useEffect, Suspense,useCallback } from 'react';
import './Header.css';
import { useDispatch, useSelector, } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';


const Header = () => {
   
 
 
    return (
        <>
                          
                        
    
  
            <div className="cityonnet_Header_xs d-block d-md-none">
                <div className="container-fluid ">
                    <div className="row">
                        <div className="headerleft col-6 ">
                            <i className="fas fa-list" ></i>

                        

                        </div>
                        <div className="headerright col-6">
                            <ul className="nav navlist justify-content-end" > 
                                <li className="nav-item" >
                                    <a className="nav-link" href="#"><i className="fas fa-language" /></a>
                                </li>
                                <li className="nav-item" >
                                    <a className="nav-link" href="#"><i className="fas fa-map-marker-alt" /></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><i className="fas fa-shopping-cart" /></a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                    
                        <div className="headersearch col-12">
                            <input
                                className="inputbar"
                                type="text"
                                placeholder="Search by Products, Brands, Stores, Bussiness" />
                            <button className="gobutton"><i className="fas fa-search" /></button>
                            
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
                            <ul className="nav navlist justify-content-end">
                                <li className="nav-item">
                                
                                </li>
                               
                                <li className="nav-item" >
                                    <a className="nav-link" href="#"><i className="fas fa-map-marker-alt" /> <span> mysore</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><i className="fas fa-download" /> <span> App</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><i className="fas fa-user" /> <span>Seller App</span></a>
                                </li>
                            </ul>
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
                                    <input
                                        className="inputbar"
                                        type="text"
                                        placeholder="Search by Products, Brands, Stores, Bussiness" />
                                    <button className="gobutton"><i className="fas fa-search" /></button>
                                   
                                </div>


                                <ul className="nav navlist_menu col-5">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/cart"><i className="fas fa-shopping-cart" /> <span> PickupinStore 1</span></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/cart"><i className="fa fa-motorcycle" aria-hidden="true" /> <span> Home Delivery 0 </span></Link>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            
            <Suspense>
               
                    
            </Suspense>

        </>
    )
}

// https://cityonnet-api.herokuapp.com/v1/search/autocomplete

export default Header;