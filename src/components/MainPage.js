import React from 'react';
import {connect} from 'react-redux'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import DataTable from "./DataTable";

function MainPage({loading,profiles}) {
    return (<>
            {loading?<Spinner/>:profiles.length>0? <DataTable profiles={profiles}/>:<h4>Awaiting user selection...</h4>}
            </>
    );
}
const mapStateToProps=(state)=>({
    loading:state.loading,
    profiles:state.profiles,

})
MainPage.propTypes={
    loading:PropTypes.bool.isRequired,
    profiles:PropTypes.array.isRequired
}

export default connect(mapStateToProps,{})(MainPage);
