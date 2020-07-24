import React from 'react';
import  {getUsers,maxSource, minSource} from '../store/MainReducer'
import {connect} from 'react-redux'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import DataTable from "./DataTable";

function MainPage({getUsers,loading,profiles,userSelect}) {

    return (

            <div>
                <button onClick={()=>getUsers(minSource)}>minimal data</button>
                <button onClick={()=>getUsers(maxSource)}>maximum data</button>
                {loading && userSelect?<Spinner/>:<h1>hi</h1>}
                {profiles.length>0? <DataTable profiles={profiles}/>:<h4>No profiles found...</h4>}
            </div>
    );
}
const mapStateToProps=(state)=>({
    loading:state.loading,
    profiles:state.profiles,
    userSelect:state.userSelect
})
MainPage.propTypes={
    getUsers:PropTypes.func.isRequired,
    loading:PropTypes.bool.isRequired,
    userSelect:PropTypes.bool.isRequired,
    profiles:PropTypes.array.isRequired
}

export default connect(mapStateToProps,{getUsers})(MainPage);
