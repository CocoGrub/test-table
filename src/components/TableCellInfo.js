import React from "react";
import PropTypes from 'prop-types'
const TableCellInfo=({clearCellData,firstName,description,address={streetAddress:'Italy',city:'Rome',state:'Rome',zip:'12345'}})=>{
    const {streetAddress,city,state,zip}=address
    return(
        <div className={"TableCellInfo"}>
            <dl>
            <dt>Выбран пользователь: <b>{firstName}</b></dt>
            <dt>Описание:  <span >{description}</span></dt>
            <dt>Адрес проживания:  <b>{streetAddress}</b></dt>
            <dt>Город:  <b>{city}</b></dt>
            <dt>Провинция/штат:  <b>{state}</b></dt>
            <dt>Индекс:  <b>{zip}</b></dt>
            </dl>
            <button onClick={()=>{clearCellData()}}>close window</button>
        </div>
    )

}

TableCellInfo.propTypes={
    clearCellData:PropTypes.func.isRequired,
    firstName:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    address:PropTypes.object
}

export default TableCellInfo