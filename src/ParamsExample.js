import React, { Component } from "react";

export default class ParamsExample extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return <h1>Params</h1>;
    }
}