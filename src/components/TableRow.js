import React from 'react';

const TableRow = ({ rowData }) => {
  return (
    <tr>
      <td className='right-col order'>#{rowData.orderId}</td>
      <td className='right-col'>{rowData.date}</td>
      <td className='left-col'>{rowData.amount}</td>
      <td className='left-col'>{rowData.fee}</td>
    </tr>
  );
};

export default TableRow;