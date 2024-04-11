import classNames from 'classnames';
import React from 'react';

import type { InputProps } from './types';

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...otherProps }, ref) => (
    <input
      ref={ref}
      className={classNames(
        'border border-brand font-light text-brand rounded-lg py-2 px-2 bg-white',
        className,
      )}
      {...otherProps}
    />
  ),
);

Input.displayName = 'Input';
