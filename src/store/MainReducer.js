import {
    CLEAR_DATA,
    CLOSE_MODAL,
    CLOSE_MODAL_FORM,
    DATA_ERROR,
    GET_DATA,
    OPEN_MODAL_FORM,
    SAVE_FORM_DATA
} from "./Action-Types";
import axios from 'axios'

const initialState = {
    formModal:false,
    modal:true,
    profiles: [],
    loading: false,
    userSelect:false,
    errors: null
}
function insertItemImHelper(array, action) {
    let newArray = array.slice()
    newArray.splice(action.index, 0, action)
    return newArray
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
        case OPEN_MODAL_FORM:
            return {...state,formModal: true}
        case CLOSE_MODAL_FORM:
            return {...state,formModal: false}
        case SAVE_FORM_DATA:
            return {...state,profiles: insertItemImHelper(state.profiles,payload)}
        case DATA_ERROR:{
            return {...state,errors:payload }
        }
        default:
            return state
    }
}

export const minSource=`http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`
export const maxSource=`http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`

//open modal form
export const openModalForm= ()=>(dispatch)=>{
    dispatch({
        type:OPEN_MODAL_FORM
    })
}
//open modal form
export const closeModalForm= ()=>(dispatch)=>{
    dispatch({
        type:CLOSE_MODAL_FORM
    })
}
//Save data form data
export const saveFormData=(x)=>(dispatch)=>{
    dispatch({
        type:SAVE_FORM_DATA,
        payload:x
    })
    dispatch({
        type:CLOSE_MODAL_FORM
    })
}

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
        dispatch({
            type: DATA_ERROR,
            payload: {msg: err.message}
        })
    }
}
// Clear users
export const clearData = (x) => (dispatch) => {
    dispatch({
        type:CLEAR_DATA
    })

}