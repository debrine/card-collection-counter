import React, { useState } from 'react';

type Props = {
  onSearchChange: (searchString: string) => void;
};

export default function CardsSidePanel({ onSearchChange }: Props) {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSearchValue(newValue);
    onSearchChange(newValue);
  };

  const handleClearSearch = (event: React.MouseEvent) => {
    event.preventDefault();
    setSearchValue('');
    onSearchChange('');
  };

  return (
    <div
      className='side-panel'
      style={{
        position: 'sticky',
        top: 0,
        display: 'flex',
        flexDirection: 'column',
        width: '250px',
        height: '100vh',
        backgroundColor: 'var(--background-color, #242424)',
        padding: '20px',
        borderRight: '1px solid var(--border-color, rgba(255, 255, 255, 0.1))',
        overflowY: 'auto',
        msOverflowStyle: 'none', // Hide scrollbar in IE/Edge
        scrollbarWidth: 'none', // Hide scrollbar in Firefox
      }}>
      <style>
        {`
          .side-panel::-webkit-scrollbar {
            display: none;  /* Hide scrollbar in Chrome/Safari/Webkit */
          }
        `}
      </style>
      <div
        className='search-section'
        style={{
          marginTop: '4rem',
          width: '100%',
        }}>
        <h3
          style={{
            color: 'var(--text-color, rgba(255, 255, 255, 0.87))',
            marginBottom: '1rem',
            fontSize: '1.2rem',
          }}>
          Search Cards
        </h3>
        <div style={{ position: 'relative' }}>
          <input
            type='text'
            value={searchValue}
            placeholder='Search cards...'
            onChange={handleSearchChange}
            style={{
              width: '100%',
              padding: '8px',
              paddingRight: '32px',
              boxSizing: 'border-box',
              borderRadius: '4px',
              border: '1px solid var(--border-color, rgba(255, 255, 255, 0.3))',
              backgroundColor: 'transparent',
              color: 'var(--text-color, rgba(255, 255, 255, 0.87))',
              fontSize: '1rem',
            }}
          />
          {searchValue && (
            <button
              className='hoverable'
              onMouseDown={handleClearSearch}
              style={{
                position: 'absolute',
                right: '8px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                outline: 'none',
                padding: '4px',
                color: 'var(--text-color, rgba(255, 255, 255, 0.87))',
                opacity: '0.7',
                fontSize: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                width: '24px',
                height: '24px',
              }}>
              ×
            </button>
          )}
        </div>
      </div>
      {/* Future sections for sorting and filtering will go here */}
    </div>
  );
}
