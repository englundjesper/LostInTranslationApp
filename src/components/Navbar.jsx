import React, { useState } from 'react';
import * as AuthService from '../services/AuthService';

const Navbar = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(AuthService.isAuthenticated());
  const logoutHandler = () => {
    AuthService.logout();
  };

  return (
    <div>
      <div>navbar</div>
      {isAuthenticated ? <button onClick={logoutHandler}>Log out</button> : ''}
    </div>
  );
};
export default Navbar;
