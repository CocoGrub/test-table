import React, {useState} from "react";
import PropTypes from 'prop-types'
import Pagination from "./Pagination";

const DataTable = ({profiles}) => {

    const [currentPage,setCurrentPage]=useState(1)
    const [postPerPage,setPostsPerPage]=useState(10)

    const indexOfLastPost=currentPage*postPerPage
    const indexOfFirstPost=indexOfLastPost-postPerPage
    const currentPosts = profiles.slice(indexOfFirstPost,indexOfLastPost)

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

    const paginate=(pageNumber)=>setCurrentPage(pageNumber)
    return (
        <>
            <h2 className={"my-2"}>Users Data</h2>
            <Pagination postPerPage={postPerPage} totalUsersCount={profiles.length} paginate={paginate}/>
            <table className={"profiles"}>
                <thead>
                <tr>
                    <th>firstName</th>
                    <th className={"hide-sm"}>lastName</th>
                    <th className={"hide-sm"}>email</th>
                    <th className={"hide-sm"}>phone</th>
                    <th className={"hide-sm"}>address</th>
                    <th className={"hide-sm"}>description</th>
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

export default DataTable;