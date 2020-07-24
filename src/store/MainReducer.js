import {CLEAR_DATA, CLOSE_MODAL, DATA_ERROR, GET_DATA} from "./Action-Types";
import axios from 'axios'

const initialState = {
    modal:true,
    profiles: [],
    loading: false,
    userSelect:false
    // errors: {}
}
export default function (state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case CLEAR_DATA:
            return {...state,profiles:[],modal: true,loading: false}
        case CLOSE_MODAL:
            return {...state,modal: false,loading: true}
        case GET_DATA:
            return {...state, profiles: payload,loading: false}
        default:
            return state

    }
}

export const minSource=`http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`
export const maxSource=`http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`

// GET  users
export const getUsers = (x) => async (dispatch) => {
    dispatch({
        type:CLOSE_MODAL
    })
    try {
        const res = await axios.get(x)

        dispatch({
            type: GET_DATA,
            payload: res.data
        })
    } catch (err) {
        // dispatch({
        //     type: DATA_ERROR,
        //     payload: {msg: err.response.statusText, status: err.response.status}
        // })
        console.log(err)
    }
}
// Clear users
export const clearData = (x) => (dispatch) => {
    dispatch({
        type:CLEAR_DATA
    })

}