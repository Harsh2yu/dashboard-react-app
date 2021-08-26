import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import rootReducer from "./redux/reducers";
import { createStore } from 'redux';
import App from './App';

/*
import RxjsExample from './RxjsExample';
import Register from "./Register";
import PureComponentExample from "./PureComponent";
import RegisterHooks from "./RegisterHooks";
import RegisterHooksUsingRef from "./RegisterHooksUsingRef";
import DataLoader from "./UserEffectHook";
import UseRefExample from "./UseRefHooks";
import RegisterHooks2 from "./RegisterHooks2";
import ParentComponent from "./components/ParentComponent";
import Counter from "./components/Counter";
import SignIn from "./components/Sign";
import App from "./App";

*/

const message = "Hello Harsh";
const tasks = ["first", "second", "third"];
const pageTitle = {
    type: "Component",
    subject: "Props"
}

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById("root"));

// ReactDOM.render(<RxjsExample />, document.getElementById("root"));