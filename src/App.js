import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from '../src/store/store'
import MainPage from "./components/MainPage";

function App() {
    return (
        <Provider store={store}>
            <MainPage/>
        </Provider>
    );
}

export default (App);
