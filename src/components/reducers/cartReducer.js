import classic from './../../images/classic.jpg'
import standout from './../../images/standout.jpg'
import premium from './../../images/premium.jpg'
import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING } from '../actions/action-types/cart-actions'
import { checkout } from '../actions/cartActions';
const _ = require('lodash');

const initState = {
    items: [
        // { id: 1, title: 'Classic Ad', desc: "Classic ad fulfil the minimum requirements. Start with calssic for our classic service.", price: 269.99, img: classic },
        // { id: 2, title: 'Standout Ad', desc: "Standout ad gives an upper hand to you on others ads. Do not trust me? try instead!", price: 322.99, img: standout },
        // { id: 3, title: 'Premium Ad', desc: "Premium ad is a special service for special customers, be one of our exceptional customers.", price: 394.99, img: premium },
    ],
    addedItems: [],
    total: 0,
    login_status: false,
    login_user: "Login"
}

const convertCartToServerComplaint = (cartItems) => _.map(cartItems, item => item.name);
const expandCart = (addedItems) => _.reduce(addedItems, (result, curr) => {
    let expansion = [];
    for (var i = 0; i < curr.quantity; i++) {
        expansion.push(curr);
    }
    return _.concat(result, expansion);
}, [])

const cartReducer = (state = initState, action) => {

    //INSIDE HOME COMPONENT
    if (action.type === ADD_TO_CART) {
        let addedItem = state.items.find(item => item.id === action.id)
        //check if the action id exists in the addedItems
        let existed_item = state.addedItems.find(item => action.id === item.id)
        if (existed_item) {
            addedItem.quantity += 1

            let newState = {
                ...state
            };
            let serverCart = convertCartToServerComplaint(expandCart(newState.addedItems));
            action.asyncDispatch(checkout(serverCart, newState.login_user));
            return newState;
        }
        else {
            addedItem.quantity = 1;

            let newState = {
                ...state,
                addedItems: [...state.addedItems, addedItem],
            }

            let serverCart = convertCartToServerComplaint(expandCart(newState.addedItems));
            action.asyncDispatch(checkout(serverCart, newState.login_user));
            return newState;
        }
    }
    if (action.type === REMOVE_ITEM) {
        let itemToRemove = state.addedItems.find(item => action.id === item.id)
        let new_items = state.addedItems.filter(item => action.id !== item.id)

        //calculating the total
        console.log(itemToRemove)
        let newState = {
            ...state,
            addedItems: new_items,
        };

        let serverCart = convertCartToServerComplaint(expandCart(newState.addedItems));
        action.asyncDispatch(checkout(serverCart, newState.login_user));
        return newState;
    }
    //INSIDE CART COMPONENT
    if (action.type === ADD_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id)
        addedItem.quantity += 1
        let newState = {
            ...state,
        };
        let serverCart = convertCartToServerComplaint(expandCart(newState.addedItems));
        action.asyncDispatch(checkout(serverCart, newState.login_user));
        return newState;
    }
    if (action.type === SUB_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id)
        //if the qt == 0 then it should be removed
        if (addedItem.quantity === 1) {
            let new_items = state.addedItems.filter(item => item.id !== action.id)
            let newState = {
                ...state,
                addedItems: new_items,
            };
            let serverCart = convertCartToServerComplaint(expandCart(newState.addedItems));
            action.asyncDispatch(checkout(serverCart, newState.login_user));
            return newState;
        }
        else {
            addedItem.quantity -= 1
            let newState = {
                ...state,
            };
            let serverCart = convertCartToServerComplaint(expandCart(newState.addedItems));
            action.asyncDispatch(checkout(serverCart, newState.login_user));
            return newState;
        }
    }

    if (action.type === ADD_SHIPPING) {
        return {
            ...state,
            total: state.total + 6
        }
    }

    if (action.type === 'SUB_SHIPPING') {
        return {
            ...state,
            total: state.total - 6
        }
    }

    if (action.type === 'SET_LOGIN_STATUS') {
        return {
            ...state,
            login_status: action.payload.login,
            login_user: action.payload.user
        }
    }

    if (action.type === 'SET_LOGOUT') {
        return {
            ...state,
            login_status: action.payload.login,
            login_user: action.payload.user
        }
    }

    if (action.type === 'FETCH_ADS_COMPLETE') {
        return {
            ...state,
            items: ((items) => {
                return _.map(items, item => {
                    console.log(item.name);
                    switch (item.name) {
                        case 'classic' : item.img = classic;
                        break;

                        case 'standout' : item.img = standout;
                        break;

                        case 'premium' : item.img = premium;
                        break;

                        default: item.img = "";
                    }

                    return item;
                })
            })(action.payload)
        }
    }

    if (action.type === 'CHECKOUT_COMPLETE') {
        return {
            ...state,
            total: action.payload
        }
    }

    return state;
}

export default cartReducer