import React from 'react'
import NavbarContainer from "./NavbarContainer"
import Dashboard from './Dashboard';

const MainContainer = () => {
    return (
        <div className='main-container'>
            <div className="navbar-container" >
            <NavbarContainer />

            </div>
            <div className="dashboard-container">
            <Dashboard  />
            </div>
            
 


        </div>
    )
}

export default MainContainer;
