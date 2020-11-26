import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const LoginForm = (props) => {
  const { handleLogin } = props;
  const [username, setUsername] = useState('');

  const onChangeUsername = (event) => {
    setUsername(event.target.value);
  };
  const onLoginClick = () => {
    handleLogin(username);
  };
  return (
    <div>
      <input placeholder="Enter your name" onChange={onChangeUsername}></input>
      &nbsp;
      <Button onClick={onLoginClick} variant="success" size="lg">
        Log In
      </Button>{' '}
    </div>
  );
};
export default LoginForm;
