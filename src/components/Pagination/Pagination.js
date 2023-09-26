import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
// import '../Pagination/pagination.css'



const Pagination = ({ info, pageNumber,   setPageNumber }) => {
   
    let [width, setWidth] = useState(window.innerWidth);

// console.log(width);

let updateDimension = () => {
    setWidth(window.innerWidth)
};


useEffect(() => {
    window.addEventListener("resize", updateDimension);
    return () => window.removeEventListener("resize", updateDimension)
}, []);


return (
    <>
    <style jsx>
    {`
          @media (max-width: 768px) {
            .pagination {
              font-size: 12px;
            }
            .next,
            .prev {
              display: none;
            }
          }
          
            .pagination {
              font-size: 14px;
              
            }
          
        `}
    </style>
    <ReactPaginate
            className="pagination justify-content-center gap-4 my-4"
            forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
            nextLabel="Next "
            previousLabel="Prev"
            previousClassName="btn btn-primary  prev"
            nextClassName="btn btn-primary  next"
            pageClassName="page-item"
            activeClassName='active'
            marginPagesDisplayed={width < 576 ? 1 : 2}
            pageRangeDisplayed={width < 576 ? 1 : 2}
            pageLinkClassName="page-link"
            onPageChange = {(data) => {
                setPageNumber(data.selected + 1);
              }}
              pageCount={info?.pages}
           
        />
        </>
    
        );
    
    
};

export default Pagination
// import React from "react";
// import ReactPaginate from 'react-paginate';
// const Pagination = ({info, pageNumber, setPageNumber }) => {


//   let next =() => {
//     if(pageNumber === 1) return;
//     setPageNumber((x) => x-1)
//   }
// let prev =() => {
//   if(pageNumber === 1) return;
//   setPageNumber((x) => x-1)
// }
//   return (
//   // <ReactPaginate pageCount={info.pages} />
//   <div className="container d-flex justify-content-center">
//    <button onClick={prev} className="btn btn-primary"> 
// prev
//    </button>
   
//    <button onClick={next} className="btn btn-primary"> 
// next
//    </button>


//   </div>
//   )
// }
// export default Pagination

