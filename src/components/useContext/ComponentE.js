import React, { useContext } from "react";
import ComponentF from "./ComponentF";
import { UserContext } from "../App";

export default function ComponentE() {
    const user = useContext(UserContext);
    return (
        <div>
            <ComponentF />
            Component E
            User is {user}</div>
    )
}