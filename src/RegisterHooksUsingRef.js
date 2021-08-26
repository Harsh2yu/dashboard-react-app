import React, { useEffect, useRef, useState } from "react";

export default function RegisterHooksUsingRef() {
    const [name, setName] = useState("Harsh");
    const input = useRef();

    useEffect(() => {
        console.log("useEffect");
        input.current.onkeyup = handleChange;
        input.current.value = name;
    })

    function handleChange(e) {
        e.preventDefault();
        setName(e.target.value); // to update state
    }

    return (
        <div>
            <div>
                Name:
                <input type="text" ref={input} />
            </div>
            <div>Name is: {name}</div>
        </div>
    )
}