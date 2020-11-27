import React, { useState } from 'react';
import { Button, Row } from 'react-bootstrap';

const LoginForm = (props) => {
  const { handleLogin } = props;
  const [username, setUsername] = useState('');
  const onChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const onLoginClick = () => {
    handleLogin(username);
  };

  const LoginButtonStyle = {
    width: '10%',
  };

  return (
    <Row className="justify-content-center">
      <input placeholder="Enter your name" onChange={onChangeUsername}></input>
      &nbsp;
      <Button style={LoginButtonStyle} onClick={onLoginClick} variant="success" size="lg">
        Log In
      </Button>{' '}
    </Row>
  );
};
export default LoginForm;
