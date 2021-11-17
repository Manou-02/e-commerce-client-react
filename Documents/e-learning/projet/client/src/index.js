import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import { Provider } from "react-redux";
import store from './reducers/store';
import { getAllCategory } from './actions/CategoryAction';
import { getAllProduit } from './actions/ProduitAction';
import { getPanier } from './actions/PanierAction';
import { getAllCommande } from './actions/CommandeActions';

store.dispatch(getAllCategory());
store.dispatch(getAllProduit());
store.dispatch(getPanier());
store.dispatch(getAllCommande());


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));
