import React from "react";

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

export default TableCellInfo