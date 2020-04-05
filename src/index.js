import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

// Set up redux store
const store = createStore(rootReducer,
    // Use thunk as middleware for extra funcitonality
    applyMiddleware(thunk)
);

const rootElement = document.getElementById('root');

// Provider binds redux state to the application
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
