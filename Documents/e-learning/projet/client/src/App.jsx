import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Accueil from './pages/Accueil';
import Category from './components/public/Category'

const App = () => {
    return (
        <div className="container">
            <Router>
                <Switch>
                    <Route path="/" component={Category} />
                </Switch>            
            </Router>
        </div>
    )
}

export default App;