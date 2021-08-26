import React from "react";

export default class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            user: "",
            rememberMe: false
        }
    }

    handleChange = (event) => {
        const input = event.target;
        const value = input.type === "checkbox" ? input.checked : input.value;
        console.log(value);
        this.setState({
            [input.name]: value
        })
    }

    handleFormSubmit = () => {
        const { user, rememberMe } = this.state;
        localStorage.setItem("rememberMe", rememberMe);
        localStorage.setItem("user", rememberMe ? user : "");
    }

    componentDidMount() {
        const rememberMe = localStorage.getItem("rememberMe");
        const user = rememberMe ? localStorage.getItem("user") : "";
        this.setState({ user, rememberMe })
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <label>
                    User:
                    <input name="user" type="text" value={this.state.user} onChange={this.handleChange} />
                </label>

                <label>
                    <input name="rememberMe" type="checkbox" checked={this.state.rememberMe} onChange={this.handleChange} />
                    Remember me
                </label>
                <button type="submit" >Sign In</button>
            </form>
        )
    }
}