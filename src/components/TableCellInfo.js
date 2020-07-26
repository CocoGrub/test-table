import React from "react";
import PropTypes from 'prop-types'
const TableCellInfo=({clearCellData,firstName,description='undefined',address={streetAddress:'undefined',city:'undefined',state:'undefined',zip:'undefined'}})=>{
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
    description:PropTypes.string,
    address:PropTypes.object
}

export default TableCellInfo