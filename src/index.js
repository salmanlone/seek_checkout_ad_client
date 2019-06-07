import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import cartReducer from './components/reducers/cartReducer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {fetchAds} from "./components/actions/adActions";
import asynActionMiddleware from "./components/middleware/asynAction";

const store = createStore(cartReducer, applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions,
    asynActionMiddleware
));

store.dispatch(fetchAds());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));