import React from 'react'
import Header from './Header'
import Overview from './Overview'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Header/>
      <div className='body-container'>
      <Overview/>
      </div>
    </div>
  )
}

export default Dashboard
