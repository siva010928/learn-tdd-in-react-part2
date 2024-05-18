import React from "react";
import { useState } from "react";
import axios from "axios";

const TestAxios = ({url}) => {
    const [data, setData] = useState();
    const fetchData = async () => {
        const response = await axios.get(url);
        console.log(response);
        setData(response.data.login)
    };
     return (
        <>
            <button data-testid="fetch-data" onClick={fetchData}>fetch data</button>
            {data ? (
                <div data-testid="show-data">
                    {data}
                </div>
            ) : (
                <h1 data-testid="loading">Loading...</h1>
            )}
        </>
    )
}

export default TestAxios;