import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Nav from "./components/Nav"


import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/Contactpage';

function App() {
  return (
    <Router>
      <div>
        <Nav />
      <Switch>
      <Route path="/">
          <HomePage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
