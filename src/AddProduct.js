import React from "react";

export default class AddProduct extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        console.log("Add Product Component >>>>>>>>>>>>>>>", props);
    }

    handleSubmit(event) {
        event.preventDefault(); // stop page refresh
        
        const imageLink = event.target.elements.link.value;
        const description = event.target.elements.description.value;
        debugger;
        const product = {
            productId: Number(new Date()),
            description: description,
            imageUrl: imageLink
        }

        if (imageLink && description) {
            console.log(product);
         //   this.props.onAddProduct(product);
            this.props.addProduct(product); // calling redux action 
            this.props.onHistory.push("/");
        }
    }

    render() {
        return <div>
            <h1>
                Product Add
            </h1>

            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Please enter image url" name="link" />
                    <input type="text" placeholder="Please enter description" name="description" />
                    <button className="btn btn-primary">Post</button>
                </form>
            </div>
        </div>
    }
}