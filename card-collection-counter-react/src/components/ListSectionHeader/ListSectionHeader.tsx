import React from 'react';
import TriangleArrowIcon from '../../common/Icons/TriangleArrowIcon';

type Props = {
  label: string;
  indentLevel: number;
  isSectionCollapsed: boolean;
  toggleIsSectionCollapsed: () => void;
};

export function ListSectionHeader({
  label,
  indentLevel,
  isSectionCollapsed,
  toggleIsSectionCollapsed,
}: Props) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        marginLeft: `${indentLevel * 4}rem`,
      }}
      onClick={toggleIsSectionCollapsed}
      className='hoverable'>
      <TriangleArrowIcon
        style={{
          marginRight: '1rem',
          transform: isSectionCollapsed ? '' : 'rotate(180deg)',
        }}
      />
      <span className='ccc-subheader'>{label}</span>
    </div>
  );
}
