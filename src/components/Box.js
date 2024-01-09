import React from 'react'

const Box = ({text, boxValue}) => {
  return (
    <div className='box'>
    <div className='box-text'>{text}</div>
    <div className='box-amount'>{boxValue}</div>
      
    </div>
  )
}

export default Box;
