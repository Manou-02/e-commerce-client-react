import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Accueil from './pages/Accueil';
import Category from './components/public/Category'
import Menu from './components/public/Menu'
import Auth from './components/Administration/Authentification/Auth';
import Dashboard from './components/Administration/Dashoard';
import Produit from './components/public/Produit/';
import CreateProduit from './components/public/Produit/CreateProduit';
import Panier from './components/public/Panier/Panier';
import Commande from './components/public/Commande/Commande';
import CommandeEnvoyer from './components/public/Commande/CommandeEnvoyer';
import CommandeAdmin from './components/Administration/Commande';
import User from './components/Administration/User';

const App = () => {
    return (
        <div className="">
            <Router>
                <Menu />
                <Switch>
                    <Route path="/" exact component={Accueil} />
                    <Route path="/panier" component={Panier} />
                    <Route path="/commande" component={Commande} />
                    <Route path="/commande-envoyer" component={CommandeEnvoyer} />

                    <Route path="/administration" exact component={Auth} />
                    <Route path="/administration/dashboard" component={Dashboard} />
                    <Route path="/administration/category" component={Category} />
                    <Route path="/administration/produit" exact component={Produit} />
                    <Route path="/administration/produit/create"  component={CreateProduit} />
                    <Route path="/administration/commandes"  component={CommandeAdmin} />
                    <Route path="/administration/users"  component={User} />
                </Switch>            
            </Router>
        </div>
    )
}

export default App;