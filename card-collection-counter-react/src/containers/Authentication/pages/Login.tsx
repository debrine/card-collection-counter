import React from 'react';
import LoginForm from '../components/LoginForm';

type Props = {};

export default function Login({}: Props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
}
