import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, LOGIN_USER } from './action-types/cart-actions'

//add cart action
export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        id
    }
}
//remove item action
export const removeItem = (id) => {
    return {
        type: REMOVE_ITEM,
        id
    }
}
//subtract qt action
export const subtractQuantity = (id) => {
    return {
        type: SUB_QUANTITY,
        id
    }
}
//add qt action
export const addQuantity = (id) => {
    return {
        type: ADD_QUANTITY,
        id
    }
}

//login user
export const loginUser = (params) => {
    return {
        type: LOGIN_USER,
        payload: {
            username: params.username,
            password: params.password
        }
    }
}

export const checkout = (prepared_cart, user = "default") => {
    return function (dispatch) {
        return fetch("http://localhost:9000/checkout", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "username": user,
                "cart": prepared_cart
            })
        })
            .then(response => response.json())
            .then((json) => {
                dispatch({
                    type: "CHECKOUT_COMPLETE",
                    payload: json.total
                });
            })
    }
}