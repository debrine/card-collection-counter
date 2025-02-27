import React, { ComponentProps } from 'react';

type Props = {
  spanProps?: ComponentProps<'span'>;
};

export default function TriangleArrowIcon({
  style = {},
  ...rest
}: ComponentProps<'span'>) {
  return (
    <span {...rest} style={{ display: 'inline-block', ...style }}>
      <svg
        fill='white'
        width='20px'
        height='20px'
        viewBox='0 0 123.959 123.959'
        style={{ display: 'block' }}>
        <g>
          <path
            d='M66.18,29.742c-2.301-2.3-6.101-2.3-8.401,0l-56,56c-3.8,3.801-1.1,10.2,4.2,10.2h112c5.3,0,8-6.399,4.2-10.2L66.18,29.742
		z'
          />
        </g>
      </svg>
    </span>
  );
}
