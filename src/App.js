import React from 'react';
import './App.css';
import { Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './utils/ProtectedRoute';
import ProfilePage from './pages/ProfilePage';
import Navbar from './components/Navbar';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

function App() {
  return (
    <>
      <Router history={history}>
        <Navbar history={history}></Navbar>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <ProtectedRoute exact path="/" component={HomePage} />
          <ProtectedRoute exact path="/profile" component={ProfilePage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
