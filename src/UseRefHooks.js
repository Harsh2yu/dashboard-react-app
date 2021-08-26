import React, { useEffect, useRef } from "react";

export default function UseRefExample() {
    const inputRef = useRef([null]);

    useEffect(() => {
        inputRef.current.focus();
    })

    return (
        <div style={{ marginLeft: '200px' }}>
            <input ref={inputRef} type="text" />
        </div>
    )

}