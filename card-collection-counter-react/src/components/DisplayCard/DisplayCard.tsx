import React from 'react';
import './DisplayCard.css';
type Props = {
  label: string;
  onClick?: () => void;
  imageSource?: string;
  width?: string;
};
const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export default function DisplayCard({
  label,
  onClick = () => {},
  imageSource,
  width = '240px',
}: Props) {
  return (
    <div
      className='dc-container'
      style={{
        width,
      }}
      onClick={onClick}>
      <img
        src={`${SERVER_URL}/public/${imageSource}`}
        loading='lazy'
        alt={label}
      />
      {/* <span className='dc-container-label'>{label}</span> */}
    </div>
  );
}
