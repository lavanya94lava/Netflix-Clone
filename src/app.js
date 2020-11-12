import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import { JumbotronContainer } from './containers/jumbotron';
import { FooterContainer } from './containers/footer';
import { FaqsContainer } from './containers/faqs';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';

export default function App() {
  return (
    <Router>
      <Route exact path = "/signin">
        <JumbotronContainer/>
        <FaqsContainer/>
        <FooterContainer/>
      </Route>
    </Router>
  );
}


