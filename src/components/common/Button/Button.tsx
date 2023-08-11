import { forwardRef } from 'react';

import { getClassName } from '~utils';

import s from './Button.module.css';

interface ButtonProps extends React.ComponentProps<'button'> {
  variant: 'filled' | 'filledTonal'
  size: 'small' | 'large'
  active?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    variant,
    size,
    active = false,
    children,
    ...otherProps
  }, ref) => (
    <button
      {...otherProps}
      ref={ref}
      className={getClassName(
        s.button,
        s[size],
        s[variant],
        {
          [s.active]: active,
        },
      )}
    >
      {children}
    </button>
  ),
);
