import React from 'react';
import RegisterForm from '../components/RegisterForm';

type Props = {};

export default function Register({}: Props) {
  return (
    <>
      <span className='ccc-header'>Register</span> <RegisterForm />
    </>
  );
}
