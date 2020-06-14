import React from 'react';
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import { Route } from "react-router";
import LoginForm from '../src/features/auth/Login';
import Home from './features/home/home';
import { Authorization } from './app/common/utils/can';
import ResetPassword from './features/auth/ResetPassword';

const customHistory = createBrowserHistory();

function App() {
  return (
    <Router history={customHistory}>
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/logout" component={LoginForm} />
      <Route exact path="/reset" component={Authorization(ResetPassword, ['user'])} />
      <Route exact path="" component={Home} />
    </Router>
  );
}

export default App;
