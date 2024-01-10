import React,{useState} from 'react';
import TableRow from './TableRow';
import TableHeader from './TableHeader';
import Pagination from './Pagination';
import { data } from '../utils/constants';

const OrderTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 19; // Set the page size (in rem)

  // Calculate the indices for the current page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  // Slice the data array based on the current page indices
  const currentData = data.slice(startIndex, endIndex);
  

  return (
    <div>
     <div className="table-container">
      <table>
        <TableHeader />
        <tbody>
          {currentData.map((row, index) => (
            <TableRow key={index} rowData={row} />
          ))}
        </tbody>
      </table>
      {data.length > pageSize && (
        <Pagination
          totalItems={data.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
    
      
    </div>
  )
}

export default OrderTable;
