import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './App.css';
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList'

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/protected">Protected Page</Link>
              </li>
            </ul>
            <Switch>
              <PrivateRoute exact path="/protected" component={FriendsList}/>
              <Route path="/login" component={Login}/>
              <Route component={Login}/>
            </Switch>
          </nav>
        </header>
      </div>
    </Router>
  );
}

export default App;
