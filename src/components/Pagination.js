import React, {useState} from "react";
import PropTypes from 'prop-types'

const Pagination = ({ItemsPerPage = 12, totalUsersCount,setPage,currentPage}) => {

    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * ItemsPerPage + 1;
    let rightPortionPageNumber = portionNumber * ItemsPerPage;
    let pagesCount = Math.ceil(totalUsersCount / ItemsPerPage);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalUsersCount / ItemsPerPage); i++) {
        pageNumbers.push(i)
    }
    let portionCount = Math.ceil(pagesCount / ItemsPerPage);
    return (
        <div className={"center"}>
        <div className={"pagination"}>
            {portionNumber > 1 && <button onClick={()=>{setPortionNumber(portionNumber - 1)}}>PREV</button>}
            {pageNumbers
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return <span className={currentPage === p?"active":""}
                                 key={p}
                                 onClick={(e) => {setPage(p)}}>{p}</span>
                })}

            {portionCount > portionNumber && <button className={"btn btn-outline-info"} onClick={() => {
                setPortionNumber(portionNumber + 1)}}>NEXT</button>}

        </div>
        </div>
    )
}
Pagination.propTypes={
    ItemsPerPage:PropTypes.number,
    totalUsersCount:PropTypes.number.isRequired,
    setPage:PropTypes.func.isRequired,
    currentPage:PropTypes.number.isRequired
}

export default Pagination;