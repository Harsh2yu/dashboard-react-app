import React, { useState } from "react";

export default function RegisterHooks() {

    const [name, setName] = useState("Harsh");
    const [buttonText, setButtonText] = useState("Click me please"); 

    function handleChange(e) {
        console.log(e.target.value);
        setName(e.target.value);
    }

    return (
        <div>
            <div>
                Name:
                <input type="text" value={name} onChange={handleChange} />
            </div>
            <div>Name is {name}</div>
            <button onClick={() => setButtonText("Thanks, been clicked")}>{buttonText}</button>
        </div>
    )
}