import React from 'react';
import './DisplayCard.css';
type Props = {
  label: string;
  onClick?: () => void;
  imageSource?: string;
  width?: string;
};

export default function DisplayCard({
  label,
  onClick = () => {},
  imageSource = 'https://picsum.photos/80',
  width = '200px',
}: Props) {
  return (
    <div
      className='dc-container'
      style={{
        width,
      }}
      onClick={onClick}>
      <img src={imageSource} />
      <span className='dc-container-label'>{label}</span>
    </div>
  );
}
