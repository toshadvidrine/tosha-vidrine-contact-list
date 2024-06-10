import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Contact } from '../views/Contact';
import { AddContact } from '../views/AddContact';

const Demo = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Contact} />
                <Route exact path="/add" component={AddContact} />
                <Route exact path="/edit/:id" component={AddContact} />
            </Switch>
        </Router>
    );
};

export default Demo;
