import React, { useState } from 'react';
import * as AuthService from '../services/AuthService';
import { Navbar as BootstrapNavbar, Nav, Button } from 'react-bootstrap';
const Navbar = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(AuthService.isAuthenticated());

  const logoutHandler = () => {
    props.history.push('/login');
    setIsLoggedIn(false);
    AuthService.logout();
  };

  return (
    <BootstrapNavbar>
      <Nav>
        {isLoggedIn ? (
          <div>
            <span>Logged in</span>
            <Button onClick={logoutHandler}>Log out</Button>{' '}
          </div>
        ) : (
          <span>Not logged in</span>
        )}
      </Nav>
    </BootstrapNavbar>
  );
};
export default Navbar;
