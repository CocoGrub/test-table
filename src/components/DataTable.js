import React, {useState} from "react";
import PropTypes from 'prop-types'
import Pagination from "./Pagination";
import {clearData} from "../store/MainReducer";
import {connect} from "react-redux";

const DataTable = ({profiles,clearData}) => {

    const [table,changeTable]=useState(profiles)
    const [currentFilter,changeCurrentFilter]=useState({
        currentValue:null,
        method:null
    })
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
    const filterAddress=(x)=>{
        if(x===currentFilter.currentValue){
            changeTable([...table].sort((x, y) =>(x.address.city < y.address.city)?1:-1))
            switchFilter('');
        }else {
            switchFilter(x);
            changeTable([...table].sort((x, y) =>(x.address.city > y.address.city)?1:-1))
        }
    }



    const [currentPage,setCurrentPage]=useState(1)
    const [ItemsPerPage]=useState(10)

    const indexOfLastPost=currentPage*ItemsPerPage
    const indexOfFirstPost=indexOfLastPost-ItemsPerPage
    const currentPosts = table.slice(indexOfFirstPost,indexOfLastPost)


    const Users = currentPosts.map((profile) => {
        //because id's can be equal
        return <tr key={profile.id+profile.phone}>
            <td>{profile.firstName}</td>
            <td>{profile.lastName}</td>
            <td>{profile.email}</td>
            <td>{profile.phone}</td>
            <td>{profile.address.city}</td>
            <td>{profile.description.slice(0,40)}</td>
        </tr>
    })

    const setPage=(pageNumber)=>setCurrentPage(pageNumber)
    const {currentValue,method}=currentFilter
    return (
        <>
            <button onClick={()=>clearData()}> Return to source selection</button>
            <h2 className={"my-2"}>Users Data</h2>
            <Pagination currentPage={currentPage} ItemsPerPage={ItemsPerPage} totalUsersCount={profiles.length} setPage={setPage}/>
            <table className={"profiles"}>
                <thead>
                <tr>
                    <th className={currentValue=="firstName"&&method==="descending"?"descending":currentValue=="firstName"&&method==="ascending"?"ascending":""} onClick={()=>{setFilter("firstName")}}>First Name</th>
                    <th className={currentValue==="lastName"?"active":''} onClick={()=>{setFilter("lastName")}}>Last Name</th>
                    <th className={currentValue==="email"?"active":''} onClick={()=>{setFilter("email")}}>E-mail</th>
                    <th className={currentValue==="phone"?"active":''} onClick={()=>{setFilter("phone")}}>Phone Number</th>
                    <th className={currentValue==="address"?"active":''} onClick={()=>{filterAddress("address")}}>Address</th>
                    <th className={currentValue==="description"?"active":''} onClick={()=>{setFilter("description")}}>Description</th>
                </tr>
                </thead>
                <tbody>{Users}</tbody>
            </table>
        </>
    )
}

DataTable.propTypes={
    profiles:PropTypes.array.isRequired
}

export default connect(null,{clearData})( DataTable);