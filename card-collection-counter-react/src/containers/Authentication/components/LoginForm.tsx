import React from 'react';
import LabelledInput from '../../../components/LabelledInput/LabelledInput';

type Props = {};

export default function LoginForm({}: Props) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}>
      <LabelledInput
        label='Email Address'
        style={{
          marginBottom: '1rem',
        }}
      />
      <LabelledInput label='Password' />
    </div>
  );
}
