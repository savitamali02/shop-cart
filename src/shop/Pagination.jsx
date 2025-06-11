import React from "react";

const Pagination = ({
  productsPerPage,
  totalProducts,
  paginate,
  activePage,
}) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <ul className="default-pagination lab-ul">
    <li>
      <a href="#" onClick={() => {
        if(activePage < pageNumber.length){
          paginate(activePage - 1)
        }
      }}>
        <i className="icofont-rounded-left"></i>
      </a>
    </li>
      {pageNumber.map((number) => (
        <li key={number} className="page-item">
          <a
            onClick={() => paginate(number)}
            className={`page-link ${number === activePage ? "active" : ""}`}
          >
            {number}
          </a>
        </li>
      ))}
      <li>
      <a href="#" onClick={() => {
        if(activePage < pageNumber.length){
          paginate(activePage + 1)
        }
      }}>
        <i className="icofont-rounded-right"></i>
      </a>
    </li>
    </ul>
  );
};

export default Pagination;
