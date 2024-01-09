import React from 'react';
import Box from './Box';
import ArrowDown from '../utils/assets/icons/arrowarrowBlack.svg';

const Overview = () => {
  return (
    <div className='overview'>
    <div className='overview-top'>
        <div className='overview-text'>Overview</div>
        <div>
            <div className='prev-month'>
                <span>Last Month</span>
                <span>
                    <img src={ArrowDown} alt="arrow-down-svg" />
                </span>
            </div>
        </div>
    </div>

    <div className='box-container'>
    <Box text="Online orders" boxValue="231"/>
    <Box text="Amount received" boxValue="₹23,92,312.19"/>
    </div>
    </div>
  )
}

export default Overview
