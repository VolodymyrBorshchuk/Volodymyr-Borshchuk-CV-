import React from "react";
import data from "../data/data";
import Table from "../table/table";



function App() {
    return (
        <>
        <h2>Курс Валют</h2>
        <Table data={data}></Table>
        </>
    )
}

export default App;