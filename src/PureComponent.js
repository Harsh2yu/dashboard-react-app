import React from "react";

// export default class PureComponentExample extends React.Component {
export default class PureComponentExample extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            code: 10
        }
    }

    render() {
        console.log(this.state);
        return (
            <button onClick={() => this.setState({ code: 20 })}>Update State</button>
        )
    }

}