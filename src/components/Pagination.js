import React from 'react';
import PrevArrow from "../utils/assets/icons/Chevron Rightprev.svg"
import NextArrow from "../utils/assets/icons/Chevron Rightnext.svg"
const Pagination = ({ totalItems, pageSize, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / pageSize);
  const maxVisiblePages = 10;

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  let pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  if (totalPages > maxVisiblePages) {
    pages = [
      1,
      '...', // Placeholder for ellipsis
      ...pages.slice(currentPage - 3, currentPage + 7),
    ];
  }

  return (
    <div className="pagination">
      <span className="prev-next" onClick={handlePrevious}>
        <span>
          <img src={PrevArrow} alt="arrow-prev" />
        </span> <span>Previous</span>
      </span>
      <div className="pagination-numbers">
        {pages.map((page, index) =>
          page === '...' ? (
            <span key={index}>{page}</span>
          ) : (
            <span
              key={index}
              className={currentPage === page ? 'active' : ''}
              onClick={() => onPageChange(page)}
            >
              {page}
            </span>
          )
        )}
      </div>
      <span className="prev-next" onClick={handleNext}>
        <span>Next</span>
        <span> <img src={NextArrow} alt="arrow-next" /></span>
      </span>
    </div>
  );
};

export default Pagination;

