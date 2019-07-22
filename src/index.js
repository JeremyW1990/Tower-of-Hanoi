import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import gameOperationReducer from './store/reducers/game-operation'
import './app.css';
import App from './app';
import * as serviceWorker from './serviceWorker';

// const rootReducer = combineReducers({
//     general: generalReducer,
//     operation: operationReducer,
// });

const rootReducer = gameOperationReducer;

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
