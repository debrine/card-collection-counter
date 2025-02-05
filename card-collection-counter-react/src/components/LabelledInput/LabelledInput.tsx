import React, { InputHTMLAttributes } from 'react';
import './LabelledInput.css';

type Props = {
  label: string;
} & Partial<InputHTMLAttributes<HTMLInputElement>>;

export default function LabelledInput({ label, ...inputProps }: Props) {
  return (
    <span className='labelled-input'>
      <label htmlFor='`labelled-input-${label}`'>{label}</label>
      <input id={`labelled-input-${label}`} {...inputProps} />
    </span>
  );
}
