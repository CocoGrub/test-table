import React from "react";
import Spinner from '../Ripple-1s-200px.svg'
export default ()=>{
    return <>
        <img src={Spinner} style={{width: '200px', margin: 'auto', display: 'block'}} alt='loading...'/>
    </>
}