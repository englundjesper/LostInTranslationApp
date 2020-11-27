import React from 'react';
import { Redirect } from 'react-router';
import LoginForm from '../components/LoginForm';
import * as AuthService from '../services/AuthService';
import { Container, Row, Col } from 'react-bootstrap';
import './LoginPage.css';

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
        <Container className="min-vh-100">
          <Row className="justify-content-center text-center text-white">
            <Col sm={12}>
              <h1>Welcome to Lost in Translation!</h1>
              <br></br>
              <h3>Get started</h3>
              <br></br>
              <LoginForm handleLogin={this.handleLogin}></LoginForm>
            </Col>
          </Row>

          <Row className="mt-3 justify-content-center text-center">
            <Col sm={12} className="justify-content-center text-center">
              <img className="signs-img" src="sign-spritesheet-1200.png"></img>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default LoginPage;
