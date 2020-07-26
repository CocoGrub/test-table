import React, {useEffect, useRef, useState} from "react";
import PropTypes from 'prop-types'
import Pagination from "./Pagination";
import {clearData, openModalForm} from "../store/MainReducer";
import {connect} from "react-redux";
import TableCellInfo from "./TableCellInfo";
import UserAddForm from "./UserAddForm";


const DataTable = ({profiles,clearData,openModalForm}) => {
    useEffect(()=>{changeTable(profiles)},[
        profiles
    ])
    const [cellInfo,setCellInfo]=useState(null)
    const [table,changeTable]=useState(profiles)
    const [searchValue,changeSearchValue]=useState('')
    const [currentFilter,changeCurrentFilter]=useState({
        currentValue:null,
        method:null
    })
    const [modal, setModal] = useState(false)

    const clearCellData=()=>{
        setCellInfo(null)
    }
    const closeModal = (k) => {
        if (k !== false) {
            setModal(false)
        }
    }
    const switchFilter=(x,y)=>{
        changeCurrentFilter({...currentFilter,currentValue: x,method: y});
    }
    const setFilter=(x)=>{
        if(x===currentFilter.currentValue&&method!=="ascending"){
            changeTable([...table].sort(dynamicSort( '-' + x)))
            switchFilter(x,"ascending");
        }else if(x!==currentFilter.currentValue){
            switchFilter(x,"descending");
            changeTable([...table].sort(dynamicSort( x)))
        }else{
            switchFilter(null,null);
            changeTable([...profiles])
        }
    }
    function dynamicSort(property) {
        let sortOrder = 1;
        if(property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a,b) {
            const result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    }
    // sort address by city
    // const filterAddress=(x)=>{
    //     if(x===currentFilter.currentValue){
    //         changeTable([...table].sort((x, y) =>(x.address.city < y.address.city)?1:-1))
    //         switchFilter(x,"ascending");
    //     }else if(x!==currentFilter.currentValue&&currentFilter.method!=="descending") {
    //         switchFilter(x,"descending");
    //         changeTable([...table].sort((x, y) =>(x.address.city > y.address.city)?1:-1))
    //     }else {
    //         switchFilter(null,null);
    //         changeTable([...profiles])
    //
    //     }
    // }
//pagination props
    const [currentPage,setCurrentPage]=useState(1)
    const [ItemsPerPage]=useState(10)

    const setPage=(pageNumber)=>setCurrentPage(pageNumber)

    const indexOfLastPost=currentPage*ItemsPerPage
    const indexOfFirstPost=indexOfLastPost-ItemsPerPage
    const currentPosts = table.slice(indexOfFirstPost,indexOfLastPost)
        //
    const getTableCellData=(x)=>{
        scrollToRef(myRef)
        setCellInfo(x)
    }

    const Users = currentPosts.map((profile) => {
        //because id's can be equal
        return <tr key={profile.id+profile.phone} onClick={()=>getTableCellData(profile)}>
            <td>{profile.id}</td>
            <td>{profile.firstName}</td>
            <td>{profile.lastName}</td>
            <td>{profile.email}</td>
            <td>{profile.phone}</td>
        </tr>
    })


    const {currentValue,method}=currentFilter
    function styling(x) {
        return currentValue===x&&method==="descending"?"descending":currentValue===x&&method==="ascending"?"ascending":""
    }
    // scroll page to info component
    const myRef = useRef(null)
    const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
    //
    const filtration=(y)=>{
        changeTable([...profiles].filter((obj) => {
            return Object.keys(obj).some((key) => {
                if (obj[key] !== null) {
                    const tempKey = obj[key].toString().toLowerCase();
                    const tempSearch = y.toLowerCase().trim();
                    return tempKey.includes(tempSearch);
                }
            });
        }))
    }

    return (
        <>
            <button onClick={()=>clearData()}> Return to source selection</button>
            <h2 className={"my-2"}>Users Data</h2>

            <div className={"searchAndAdd"}>
                <button  onClick={()=> openModalForm(true)}>добавить</button>
                <div>
                    <input type="text" value={searchValue} placeholder={"search here..."} onChange={(e)=>{changeSearchValue(e.target.value)}}/>
                    <button  onClick={()=> filtration(searchValue)}>search</button>
                </div>
            </div>

            <Pagination currentPage={currentPage} ItemsPerPage={ItemsPerPage} totalUsersCount={profiles.length} setPage={setPage}/>
            <UserAddForm />
            <table className={"profiles"}>
                <thead>
                <tr>
                    <th className={styling("id")} onClick={()=>{setFilter("id")}}>ID</th>
                    <th className={styling("firstName")} onClick={()=>{setFilter("firstName")}}>First Name</th>
                    <th className={styling("lastName")} onClick={()=>{setFilter("lastName")}}>Last Name</th>
                    <th className={styling("email")} onClick={()=>{setFilter("email")}}>E-mail</th>
                    <th className={styling("phone")} onClick={()=>{setFilter("phone")}}>Phone Number</th>
                </tr>
                </thead>
                <tbody>{Users}</tbody>
            </table>
            <div ref={myRef}>
                {cellInfo?<TableCellInfo
                    clearCellData={clearCellData}
                    firstName={cellInfo.firstName}
                    description={cellInfo.description}
                    address={cellInfo.address}
                />:null}
            </div>
        </>
    )
}

DataTable.propTypes={
    profiles:PropTypes.array.isRequired,
    clearData:PropTypes.func.isRequired,
    openModalForm:PropTypes.func.isRequired
}

export default connect(null,{clearData,openModalForm})( DataTable);