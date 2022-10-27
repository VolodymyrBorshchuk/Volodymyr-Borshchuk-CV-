import React from "react";
import "./table.css"

function Table(props) {
    return (
        <table className={'table'}>
            <thead className={'head'}>
                <th>№</th>
                <th>Назва валюти</th>
                <th>Ціна</th>
            </thead>

            <tbody>
                <tr>
                    <td>
                        {props.data.map((element) => {
                            return <p>{element.r030}</p>
                        })}
                    </td>
                    <td>
                        {props.data.map((element) => {
                            return <p>{element.txt}</p>
                        })}
                    </td>
                    <td>
                        {props.data.map((element) => {
                            return <p>{element.rate}</p>
                        })}
                    </td>
                </tr>

            </tbody>
        </table>
    )
}

export default Table;