import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage}/>>
    </Switch>
)

export default Main;