import React from 'react';
import  {getUsers,maxSource, minSource} from '../store/MainReducer'
import {connect} from 'react-redux'
import Spinner from './Spinner'

function MainPage({getUsers,loading}) {
    return (

            <div>


                <button onClick={()=>getUsers(minSource)}>minimal data</button>
                <button onClick={()=>getUsers(maxSource)}>maximum data</button>
                {loading?<Spinner/>:<h1>hi</h1>}
            </div>
    );
}
const mapStateToProps=(state)=>({
    loading:state.loading
})

export default connect(mapStateToProps,{getUsers})(MainPage);
