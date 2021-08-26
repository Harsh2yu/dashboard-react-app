import React from "react";
import ComponentC from "./components/ComponentC";

export const UserContext = React.createContext();

export default function App() {
    return (
        <div>
            <UserContext.Provider value={"Harsh"}>
                <ComponentC />
            </UserContext.Provider>
        </div>
    )
}