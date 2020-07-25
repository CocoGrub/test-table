import React, {useState} from "react";
import {createPortal} from "react-dom";

const UserAddForm=({modal})=>{
    const [formData, setFormData] = useState({
        school: '',
        degree: '',
        fieldofstudy: '',
        from: '',
        to: '',
        current: false,
        description: ''
    })

    const {school, degree, fieldofstudy, from, to, current, description} = formData
    const onchange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    if (modal) {
    return createPortal(<div className={'modal'}>
            <h1 className="large text-primary">
                Add An Education
            </h1>
            <p className="lead">
                <i className="fas fa-code-branch"></i> Add any school or bootcamp
            </p>
            <small>* = required field</small>
            <form className="form" onSubmit={(e)=>{e.preventDefault()}}>
                <div className="form-group">
                    <input value={school} onChange={e => onchange(e)} type="text" placeholder="* School Title" name="school"
                           required/>
                </div>
                <div className="form-group">
                    <input value={degree} onChange={e => onchange(e)} type="text" placeholder="* degree"
                           name="degree" required/>
                </div>
                <div className="form-group">
                    <input value={fieldofstudy} onChange={e => onchange(e)} type="text" placeholder="fieldofstudy"
                           name="fieldofstudy"/>
                </div>
                <div className="form-group">
                    <h4>From Date</h4>
                    <input type="date" name="from" value={from} onChange={e => onchange(e)}/>
                </div>

                <input type="submit" className="btn btn-primary my-1"/>
                <a className="btn btn-light my-1" href="dashboard.html">Go Back</a>
            </form>
        </div>,document.body)}
    return null
}

export default UserAddForm;