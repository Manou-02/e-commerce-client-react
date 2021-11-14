import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import { Provider } from "react-redux";
import store from './reducers/store';
import { getAllCategory } from './actions/CategoryAction';

store.dispatch(getAllCategory())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));
