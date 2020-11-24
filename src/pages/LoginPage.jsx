import React from 'react';
import { Redirect } from 'react-router';
import LoginForm from '../components/LoginForm';
import * as AuthService from '../services/AuthService';
import { Card } from 'react-bootstrap';

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
        <div>
          <Card className="text-center">
            <Card.Header>Lost in Translation</Card.Header>
            <Card.Body>
              <Card.Title>Welcome to Lost in Translation!</Card.Title>
              <Card.Text>Get started!</Card.Text>
              <Card className="blockquote mb-0 card-body">
                <LoginForm handleLogin={this.handleLogin}></LoginForm>
              </Card>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  }
}
export default LoginPage;
