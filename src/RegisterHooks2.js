import React, { useState } from "react";
import { minLength } from "./validations";

export default function RegisterHooks2() {
    const [user, setUser] = useState({});

    const [formErrors, setFormErrors] = useState({});

    function handleChange(e) {
        const { name, value } = e.target;

        switch (name) {
            case "firstName":
                if (minLength(value, 3)) {
                    formErrors[name] = `First name should have minimum 3 characters`;
                } else {
                    delete formErrors[name];
                }
                setUser({ ...user, firstName: value })
                break;

            default:
                break;
        }

        setFormErrors(formErrors);
        console.log('name', name);
        console.log('user', user);
        console.log('formErrors', formErrors);
    }


    return (
        <div className="container col-6">

            <ul>
                {Object.entries(formErrors || {}).map(([prop, value]) => {
                    return (
                        <li className="error-message" key={prop}>{value}</li>
                    )
                })}
            </ul>

            <h3>Sign up Form</h3>

            <form>
                <div className="row">
                    <div className="col-md-6">
                        <label>First Name</label>
                        <input type="text" placeholder="Enter First Name" className={
                            formErrors && formErrors.firstName ? "form-control is-invalid" : "form-control"
                        } name="firstName" onBlur={handleChange} />
                    </div>
                    <div className="col-md-6">
                        <label>Last Name</label>
                        <input type="text" placeholder="Enter Last Name" className="form-control" name="lastName" onBlur={handleChange} />
                    </div>
                </div>

                <div className="mb-3">
                    <label>Email</label>
                    <input type="text" placeholder="Enter Email" className="form-control" name="email" onBlur={handleChange} />
                </div>

                <div className="mb-3">
                    <label>Password</label>
                    <input type="text" placeholder="Enter Password" className="form-control" name="password" onBlur={handleChange} />
                </div>


                <div className="mb-3">
                    <label>Confirm Password</label>
                    <input type="text" placeholder="Confirm Password" className="form-control" name="confirmPassword" onBlur={handleChange} />
                </div>

                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">Sign up</button>
                </div>



            </form>
        </div>
    )

}