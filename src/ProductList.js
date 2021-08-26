import Product from "./Product";
import { Link } from 'react-router-dom'

export default function ProductList(props) {
    return (
        <div>
            <Link to="/Addproduct">+</Link>
            <button className="btn btn-primary">Hide Image</button>
            <div>
                {
                    props.products.products.map((product, index) =>
                        <Product key={index} product={product} onProductRemoved={props.onProductRemoved} />
                    )
                }
            </div>
        </div>
    )
}
