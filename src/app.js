import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import {Home, Browse, Signin, Signup } from './pages';
import * as ROUTES from './constants/routes';
import {IsUserRedirect, ProtectedRoute} from './helpers/routes';


export default function App() {
  const user = null ;
  return (
    <Router>
      <Route exact path = {ROUTES.SIGN_IN}>
        <IsUserRedirect user = {user} loggedInPath = {ROUTES.BROWSE} path = {ROUTES.SIGN_IN}> 
          <Signin/>
        </IsUserRedirect>
        <ProtectedRoute user = {user} path = {ROUTES.BROWSE} exact>  
          <Browse/>
        </ProtectedRoute>
        <IsUserRedirect user = {user} loggedInPath = {ROUTES.BROWSE} path = {ROUTES.SIGN_IN}> 
          <Home/>
        </IsUserRedirect>
      </Route>
      <Route exact path = {ROUTES.SIGN_UP}>
        <Signup/>
      </Route>
      <Route exact path = {ROUTES.BROWSE}>
        <Browse/>
      </Route>
      <Route exact path = {ROUTES.HOME}>
        <Home/>
      </Route>
    </Router>
  );
}


