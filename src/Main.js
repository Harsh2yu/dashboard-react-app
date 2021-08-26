import React from "react";
import Title from "./Title";
import ProductList from "./ProductList";
import AddProduct from "./AddProduct";
import "./Main.css";
import { Route, Switch } from 'react-router-dom';
import Welcome from './Welcome';
import { addProduct, removeProduct } from './redux/actions';
import PageNotFound from './404';
import PramsExample from './ParamsExample';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        console.log('Constructor 1 ...');

        this.state = {
            productName: 'Garden Cart',
            products: [], // this is our main products, it contains products
            show: true,
            screen: 'products',
            showImage: true
        }

        // this.changeProductName = this.changeProductName.bind(this);
        this.removeProduct = this.removeProduct.bind(this);
    }

    static getDerivedStateFromProps(props, state) { // before the render method
        console.log("getDerivedStateFromProps 2...");

        return {
            productName: props.productName
        }

    }

    changeProductName = () => {
        this.setState({ // update state, component re render
            productName: "Hammer"
        })
    }

    componentDidMount() { // component is rendered
        /*
        console.log("componentDidMount 4...");

        const data = getProductDataFromDb();
        this.setState({
            products: '', // updated products
            productName: 'Leaf Rake',
            showImage: false
        })
        */

        //  this.props.dispatch(addProduct({ "name": "Harsh" })); // calling action
        //  this.props.dispatch(removeProduct(2));

        // Mapping dispatch with props

        this.props.addProduct({ "name": "Harsh" });
        this.props.removeProduct(2);
    }

    shouldComponentUpdate() {
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, PrevState) {
        // document.getElementById("beforeUpdate").innerHTML = "Before update, show image flag is " + PrevState.showImage;
        return true;
    }

    componentDidUpdate() {
        //  document.getElementById("afterUpdate").innerHTML = "Current value, show image flag is " + this.state.showImage;
    }

    delAddProduct = () => {
        this.setState({
            show: false
        })
    }

    AddProduct = (productSubmitted) => {
        debugger;
        this.setState((state) => ({
            products: state.products.concat([productSubmitted])
        }))
    }

    removeProduct(productRemoved) {
        this.setState((state) => ({
            products: state.products.filter((product) => product != productRemoved)
        }))
    }

    render() {
        console.log("main props", this.props);
        const style = {
            color: "green",
            backgroundColor: "yellow",
            padding: "10px",
            fontFamily: "Arial"
        };

        let addProduct;
        if (this.state.show) {
            addProduct = <AddProduct />
        } else {
            addProduct = "";
        }
        return <div>

            <Switch>
                <Route exact path="/" render={() => (
                    <div className="product-list">
                        <Title title="Dashboard" />
                        <ProductList {...this.props} onProductRemoved={this.removeProduct} />
                    </div>
                )} />

                <Route exact path="/Addproduct" render={({ history }) => (
                    <div className="add-product">
                        <AddProduct {...this.props} onAddProduct={(addedPost) => this.AddProduct(addedPost)} onHistory={history} />
                    </div>
                )} />

                <Route exact path="/params/:id" render={(params) => (
                    <div>
                        <PramsExample {...this.props} {...params}/>
                    </div>
                )} />

                <Route exact path="/Welcome" component={Welcome} />
                <Route exact path="*" component={PageNotFound} />
            </Switch>
        </div >
    }
}


function getProductDataFromDb() {

}