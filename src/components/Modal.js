import React, {useState} from "react";
import {createPortal} from "react-dom";
import {connect} from "react-redux";
import {getUsers, maxSource, minSource} from "../store/MainReducer";



const Modal = ({modal,getUsers}) => {

    if (modal) {
        return createPortal(<div className={'modal'}>
            <div className={"center"}>
                <button onClick={()=>getUsers(minSource)}>Display little massive</button>
                <button onClick={()=>getUsers(maxSource)}>Display BIG massive</button>
            </div>



        </div>, document.body)
    }

    return null
}

const mapDispatchToProps=(state)=>({
    modal:state.modal
})

export default connect(mapDispatchToProps,{getUsers})(Modal);
