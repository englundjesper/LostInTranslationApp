import React from 'react';
import { Redirect } from 'react-router';
import * as AuthService from '../services/AuthService';
class HomePage extends React.Component {
  state = { redirect: false };

  render() {
    const loggedInUser = AuthService.getLoggedInUser();
    let { redirect } = this.state;
    if (redirect) return <Redirect to="/login" />;
    return (
      <>
        <div>Welcome to HomePage {loggedInUser}!</div>
      </>
    );
  }
}
export default HomePage;
