import React, {useState} from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from '../src/store/store'
import MainPage from "./components/MainPage";
import Modal from "./components/Modal";

function App() {
    const [modal, setModal] = useState(false)

    const showModal = (v,k) => {
        setModal(k)

    }
    const closeModal = (k) => {
        if (k !== false) {
            setModal(false)
        }

    }
    return (
        <Provider store={store}>
            < Modal id={modal} onClose={closeModal} currentId={modal} setModal={setModal} show={modal}/>
            <MainPage/>
        </Provider>
    );
}

export default (App);
