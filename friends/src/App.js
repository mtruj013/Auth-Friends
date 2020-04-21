import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './App.css';
import Login from './components/Login'

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
            </ul>
            <Switch>
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
