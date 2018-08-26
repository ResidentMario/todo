import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import reducerPackage from "./reducers";
import App from "./components/app";

// import thunk from 'redux-thunk';
// let store = createStore(reducerPackage, applyMiddleware(thunk));

let store = createStore(reducerPackage);
render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);