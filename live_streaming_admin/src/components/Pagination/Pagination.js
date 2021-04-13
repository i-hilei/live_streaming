import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';

class Paginations extends Component{
    constructor(props){
        super(props)
        console.log(props)
    }
    render(){
        
        const {resultsPerPage, totalResults, paginate, nextPage, prevPage, currentPage} = this.props
        // const pageNumbers = []
        // const ellipses = false
        console.log (resultsPerPage, totalResults, paginate, nextPage, prevPage, currentPage)
        const pageNumbers = Math.ceil(totalResults / resultsPerPage);
        
        // for (let j = 1; j <= Math.ceil(totalResults / resultsPerPage); j++){
        //     pageNumbers.push(j)
        // }
        return(
            <>
           {totalResults>resultsPerPage &&
            // <nav class="" aria-label="Page navigation example">
            //     <ul class="pagination">
            //         {currentPage>1 && <li class="page-item"><a href="javascript:void(0);"  onClick={() => prevPage()} class="page-link" aria-label="Previous"><span aria-hidden="true">«</span><span class="sr-only">Previous</span></a></li>}
                    
            //         {pageNumbers.map(num =>{
            //             let active = currentPage
            //             return(
            //                 <li class={`page-item ${(num === active)? 'active' : ''}`}><a href="javascript:void(0);" onClick={() =>paginate(num)} class="page-link">{num}</a></li>
            //             )
            //         })}  
                    
            //         {(currentPage < pageNumbers.length) && <li class="page-item"><a href="javascript:void(0);" onClick={() => nextPage()}  class="page-link" aria-label="Next"><span aria-hidden="true">»</span><span class="sr-only">Next</span></a></li>}
            //     </ul>
            // </nav>
            <ReactPaginate
                previousLabel={'<<'}
                nextLabel={'>>'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={pageNumbers}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={paginate}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'}
            />
            }
            </>
        )
    }
}
export default Paginations;