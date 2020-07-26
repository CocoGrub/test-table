import React, {useState} from "react";
import {createPortal} from "react-dom";
import {connect} from "react-redux";
import {getUsers, maxSource, minSource} from "../store/MainReducer";
import PropTypes from 'prop-types'

const Modal = ({modal,getUsers}) => {

    if (modal) {
        return createPortal(<div className={'modal'}>
            <div className={"center"}>
                <button className={"modal-button"}  onClick={()=>getUsers(minSource)}>Display little massive</button>
                <button className={"modal-button"}  onClick={()=>getUsers(maxSource)}>Display BIG massive</button>
            </div>
        </div>, document.body)
    }
    return null
}

Modal.propTypes={
    modal:PropTypes.bool.isRequired,
    getUsers:PropTypes.func.isRequired
}

const mapDispatchToProps=(state)=>({
    modal:state.modal
})


export default connect(mapDispatchToProps,{getUsers})(Modal);
