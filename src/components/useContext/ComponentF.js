import React from "react";
import { UserContext } from "../App";
export default function ComponentF() {
    return (
        <div>Component F

           <UserContext.Consumer>
               {user}
           </UserContext.Consumer>
        </div>
    )
}