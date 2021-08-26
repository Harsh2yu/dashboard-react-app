export default function Product(props) {
    const product = props.product;

    return (
        <div>
            {product.starRating} 
            
            <img width="100" height="100" src={product.imageUrl} alt={product.description} />
            <button onClick={() => {
                props.onProductRemoved(product)
            }} className="btn btn-primary">Remove</button>
        </div>
    )
}