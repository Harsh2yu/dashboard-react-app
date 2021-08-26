import React from "react";
import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';

export default class RxjsExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        const response = ajax('https://jsonplaceholder.typicode.com/todos').pipe(map(e => e.response));
        response.subscribe(res => {
            this.setState({ data: res });
        })
    }

    render() {
        return (
            <div>
                <h1>
                    Using Rxjs
                </h1>

                <ul>
                    {
                        this.state.data.map((item) => (
                            <li key={item.id}>{item.title}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }

}