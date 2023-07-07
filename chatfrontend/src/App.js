import React from 'react';
import Login from './Components/Auth/Login'
import Register from './Components/Auth/Register'
import Chat from './Components/Chat/Chat1'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import "./App.scss";


function App() {
  return (
      <Router>
          <div className="App">
              <Switch>
                  <Route exact path='/' component={Chat} />
                  <Route path='/login' component={Login} />
                  <Route path='/register' component={Register} />
                  <Route render={() => <h1>404 page not found</h1>} />
              </Switch>
          </div>
      </Router>
  );
}

export default App;
