import React, {useState} from 'react';
import './App.css';
import MainPage from "./components/MainPage";
import Modal from "./components/Modal";
import ErrorIndicator from "./components/ErrorIndicator";
import {connect} from "react-redux";
function App({errors}) {
    const [modal, setModal] = useState(false)
    const showModal = (v,k) => {
        setModal(k)

    }
    const closeModal = (k) => {
        if (k !== false) {
            setModal(false)
        }

    }
    if(errors){
        return   <ErrorIndicator errors={errors}/>
    }
    return (
        <>
            < Modal id={modal} onClose={closeModal} currentId={modal} setModal={setModal} show={modal}/>
            <MainPage/>
</>
    );
}
const mapStateToProps=(state)=>({
    errors:state.errors
})
export default connect(mapStateToProps)(App);
