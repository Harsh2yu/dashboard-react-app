export function removeProduct(index) {
    return {
        type: "REMOVE_PRODUCT",
        index
    }
}

export function loadProducts(products) {
    return {
        type: "LOAD_PRODUCTS",
        products
    }
}

export function addProduct(product) {
    return {
        type: "ADD_PRODUCT",
        product
    }
}

export function addProduct2(product) {
    return {
        type: "ADD_PRODUCT_2",
        product
    }
}
