import { useContext } from "react";
import ReactPaginate from "react-paginate";
import { MovieContext } from "../context/MovieContext";


export const PaginationComp=({totalPages})=> {
const {setCurrentPage}=useContext(MovieContext)
  return (
    <ReactPaginate
    className="paginate"
    breakLabel="..."
    onPageChange={(e)=>setCurrentPage((e.selected+1))}
    pageRangeDisplayed={2}
    pageCount={totalPages}
    renderOnZeroPageCount={null}
  />
  );
}
