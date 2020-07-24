import React, {useState} from "react";


const Pagination = ({portionSize=12, totalUsersCount,paginate,}) => {

    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    let pagesCount = Math.ceil(totalUsersCount / portionSize);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalUsersCount / portionSize); i++) {
        pageNumbers.push(i)
    }
    let portionCount = Math.ceil(pagesCount / portionSize);
    return (
        <div className={"center"}>
        <div className={"pagination"}>
            {portionNumber > 1 &&

            <button className={"btn btn-outline-secondary"} onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>PREV</button>}
            {pageNumbers
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return <span
                                 key={p}
                                 onClick={(e) => {
                                     paginate(p);
                                 }}>{p}</span>
                })}
            {portionCount > portionNumber &&
            <button className={"btn btn-outline-info"} onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>NEXT</button>}

        </div>
        </div>
    )
}

export default Pagination;