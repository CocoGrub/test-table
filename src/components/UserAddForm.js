import React, {useState} from "react";
import {createPortal} from "react-dom";
import {connect} from 'react-redux'
import {closeModalForm, saveFormData} from "../store/MainReducer";

const UserAddForm=({formModal,closeModalForm,saveFormData})=>{
    const [formData, setFormData] = useState({
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    })

    const {id, firstName, lastName, email, phone, } = formData
    const onchange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.name === 'id' ? parseFloat(e.target.value) : e.target.value})
    }
    const formSubmit=(e)=>{
        e.preventDefault()
        saveFormData(formData)
        setFormData({
            id: '',
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
        })
    }

    if (formModal) {
    return createPortal(<div className={'modal'}>
        <div className={"center user-form"}>
            <h1 className="large text-primary">ADD AN USER</h1>
            <form className="form" onSubmit={(e)=>formSubmit(e)}>
                <div className="form-group">
                    <input value={id} onChange={e => onchange(e)} type="number" placeholder="id" name="id"
                           required/>
                </div>
                <div className="form-group">
                    <input value={lastName} onChange={e => onchange(e)} type="text" placeholder="lastName"
                           name="lastName" required/>
                </div>
                <div className="form-group">
                    <input value={firstName} onChange={e => onchange(e)} type="text" placeholder="firstName"
                           name="firstName" required/>
                </div>
                <div className="form-group">
                    <input value={email} onChange={e => onchange(e)} type="email" placeholder="email"
                           name="email" required/>
                </div>
                <div className="form-group">
                    <input value={phone} onChange={e => onchange(e)} type="tel" placeholder="phone"
                           name="phone" required/>
                </div>
                <input type="submit" value={"SEND"} className="btn btn-primary my-1"/>
                <button className={"userFormButton"} onClick={()=>closeModalForm()}>CLOSE FORM</button>
            </form>
        </div>
    </div>,document.body)}
    return null
}

const mapStateToProps=(state)=>({
    formModal:state.formModal
})
export default connect(mapStateToProps,{closeModalForm,saveFormData})(UserAddForm);