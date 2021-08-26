import React, { useEffect, useState } from "react";

export default function DataLoader() {
    const [data, setData] = useState([]); // initial value is empty array

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []); // effect runs only once when the array is empty 

    return (
        <div>
            <h1>
                Data Loader
            </h1>

            <ul>
                {
                    data.map((item) => (
                        <li key={item.id}>{item.title}</li>
                    ))
                }
            </ul>
        </div>
    )
}