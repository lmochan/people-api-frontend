import './App.css';
import Nav from './components/nav';
import Directory from './components/directory';
import Login from './components/login';
import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  
  return (
    <div className="App">
      <Nav loggedIn = {loggedIn}/>
      <Router>
          
          <Route path = '/directory'><Directory /></Route>

          {
            (loggedIn !== true) ? <div>
              <Route path = '/login'><Login setLoggedIn = {setLoggedIn}/></Route>
            </div> : null
          }

      </Router>
    </div>
  );
}

export default App;
