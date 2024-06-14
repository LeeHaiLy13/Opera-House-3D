import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Model from '../pages/Model';
import Book from '../pages/BookTicket';
import Login from '../pages/LoginRegister/login';
import Register from '../pages/LoginRegister/register';

function MainRoute() {
  return (
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
      <Route path="/model" component={Model} />
      <Route path="/book-ticket" component={Book} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/">
        <Redirect to="/home" />
      </Route>
    </Switch>
  );
}

export default MainRoute;
