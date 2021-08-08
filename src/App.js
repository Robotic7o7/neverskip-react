import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from './components/nav/nav';
import LoginPage from './pages/login-page/login';
import JoinClass from './pages/join-class-page/join-class';
import HomePage from './pages/home-page/home';

function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [displayName, setDisplayName] = useState('')

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/join-class">
            <Nav
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              displayName={displayName}
            />
           <JoinClass/>
          </Route>
          <Route exact path="/home">
            <Nav
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              displayName={displayName}
            />
           <HomePage/>
          </Route>
          <Route exact path="/">
            <LoginPage
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              setDisplayName={setDisplayName}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;