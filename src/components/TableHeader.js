import React from 'react';

const TableHeader = () => {
  return (
    <thead>
    
      <tr>
        <th className='right-col '>Order ID</th>
        <th className='right-col'>Order Date </th>
        <th className='left-col'>Order Amount</th>
        <th className='left-col'>Transactional Fee</th>
      </tr>
    </thead>
  );
};

export default TableHeader;