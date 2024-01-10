import React from 'react'
import Header from './Header'
import Overview from './Overview'
import LowerDashboard from './LowerDashboard'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Header/>
      <div className='body-container'>
      <Overview/>
      <LowerDashboard/>
      </div>

    </div>
  )
}

export default Dashboard
