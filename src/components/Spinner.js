import React from "react";
import Spinner from '../svg/Ripple-1s-200px.svg'
export default ()=>{
    return <div className={"spinner"}>
        <img src={Spinner} style={{width: '200px', margin: 'auto', display: 'block'}} alt='loading...'/>
    </div>
}