import React from 'react';
import { render } from 'react-dom';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import App from './App';
import "./index.css";
import App from "./components/App";

const store = createStore(
    rootReducer, 
    applyMiddleware(logger, thunk)
)

render (
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);