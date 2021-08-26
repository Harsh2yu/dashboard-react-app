import _products from "../data/products";
import { combineReducers } from "redux";

function products(state = _products, action) {
    switch (action.type) {
        case "REMOVE_PRODUCT":
            // logic we have not added 
            return [...state];

        case "ADD_PRODUCT":
            return [...state, action.product];

        case "LOAD_PRODUCTS":
            return [...state];

        default:
            return state;
    }
}

function comments(state = _products, action) {
    switch (action.type) {
        case "REMOVE_COMMENT":
            // logic we have not added 
            return [...state];

        case "ADD_COMMENT":
            return [...state, action.product];

        case "LOAD_COMMENTS":
            return [...state];

        default:
            return state;
    }
}

const rootReducer = combineReducers({ products, comments });
export default rootReducer;