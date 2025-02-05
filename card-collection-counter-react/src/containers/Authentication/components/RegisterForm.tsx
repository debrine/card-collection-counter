import React from 'react';
import LabelledInput from '../../../components/LabelledInput/LabelledInput';

type Props = {};

export default function RegisterForm({}: Props) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}>
      <LabelledInput label='First Name' />
      <LabelledInput label='Last Name' />

      <LabelledInput label='Email Address' />
      <LabelledInput label='Password' />
      <LabelledInput label='Confirm Password' />
    </div>
  );
}
