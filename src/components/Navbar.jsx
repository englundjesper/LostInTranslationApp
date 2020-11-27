import React, { useState } from 'react';
import * as AuthService from '../services/AuthService';
import { Navbar as BootstrapNavbar, Nav, Button } from 'react-bootstrap';
const Navbar = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(AuthService.isAuthenticated());
  const loggedInUser = AuthService.getLoggedInUser();

  const logoutHandler = () => {
    props.history.push('/login');
    setIsLoggedIn(false);
    AuthService.logout();
  };

  return (
    <BootstrapNavbar bg="warning" expand="lg">
      <BootstrapNavbar.Brand className="text-white" href="/">
        <b>Lost in Translation</b>
      </BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" className="text-center" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {isLoggedIn ? (
            <Nav.Link className="text-white" href="/profile">
              {loggedInUser}
            </Nav.Link>
          ) : (
            ''
          )}
        </Nav>
        {isLoggedIn ? (
          <div>
            <Button variant="danger" onClick={logoutHandler}>
              Log out
            </Button>
          </div>
        ) : (
          ''
        )}
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};
export default Navbar;
