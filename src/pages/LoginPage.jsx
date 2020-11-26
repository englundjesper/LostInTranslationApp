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
          <div className="card w-75">
            <Card className="text-center">
              <div className="card text-white bg-warning mb-3">
                <Card.Body>
                  <Card.Title>
                    <h1>Welcome to Lost in Translation!</h1>
                  </Card.Title>
                  &nbsp;
                  <Card.Text>
                    <h3>Get started</h3>
                  </Card.Text>
                  <div className="blockquote mb-0 card-body">
                    <LoginForm handleLogin={this.handleLogin}></LoginForm>
                  </div>
                </Card.Body>
              </div>
            </Card>
          </div>
        </div>
      </>
    );
  }
}
export default LoginPage;
