import React from 'react';
import { Router, Redirect } from "react-router";
import { createBrowserHistory } from "history";
import { Route } from "react-router";
import LoginForm from '../src/features/auth/Login';
import Home from './features/home/home';
import { Authorization } from './app/common/utils/can';
import UserDetails from './features/auth/UserDetails';
import { Link } from 'react-router-dom';
import Logout from './features/auth/Logout';

const customHistory = createBrowserHistory();

function App() {
  return (
    <div>
      <Router history={customHistory}>
        <ul>
          <li>
            <Link to="login">
              Log In
            </Link>
          </li>
          <li>
            <Link to="logout">
              Log Out
            </Link>
          </li>
          <li>
            <Link to="reset">
              User Details
            </Link>
          </li>
          <li>
            <Link to="home">
              Home
            </Link>
          </li>
        </ul>
        <hr></hr>
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/logout" component={Authorization(Logout, ['user'])} />
        <Route exact path="/reset" component={Authorization(UserDetails, ['user'])} />
        <Route exact path="/home" component={Home} />
        <Redirect to="/home" />
      </Router>
    </div>
  );
}

export default App;
