import React from "react";

const TableCellInfo=({clearCellData,data:{firstName,description,address:{streetAddress,city,state,zip}}})=>{

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