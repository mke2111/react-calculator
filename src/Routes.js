import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Home from './home';
import Quote from './quote';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/app" component={App} />
      <Route exact path="/quote" component={Quote} />
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
