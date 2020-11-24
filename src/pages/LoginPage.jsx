import React from 'react';
import { Redirect } from 'react-router';
import LoginForm from '../components/LoginForm';
import * as AuthService from '../services/AuthService';

class LoginPage extends React.Component {
  state = { redirect: AuthService.isAuthenticated() };

  handleLogin = (username) => {
    AuthService.login(username);
    this.setState({ redirect: true });
  };
  render() {
    let { redirect } = this.state;
    if (redirect) return <Redirect to="/" />;

    return (
      <>
        <div>Welcome to LoginPage</div>
        <LoginForm handleLogin={this.handleLogin}></LoginForm>
      </>
    );
  }
}
export default LoginPage;
