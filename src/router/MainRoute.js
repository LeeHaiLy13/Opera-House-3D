import React from 'react';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Model from '../pages/Model';
import Book from '../pages/BookTicket';

function MainRoute() {
  return (
    <Switch>
      <Route path="/home">
        <Home></Home>
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/model">
        <Model />
      </Route>
      <Route path="/book-ticket">
        <Book />
      </Route>
      <Route path="*">
        <Home />
      </Route>
    </Switch>
  )
}

export default MainRoute