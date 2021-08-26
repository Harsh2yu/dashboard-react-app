import React, { lazy, Suspense } from "react";
// import Home from "./components/Home";
const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/Lazy loading/About"));

export default class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h1>Lazy loading</h1>
                <Suspense fallback={<div>please wait .... home is loading</div>}>
                    <Home />
                </Suspense>

                <Suspense fallback={<div>please wait .... about is loading</div>}>
                    <About />
                </Suspense>
            </div>
        )
    }
}