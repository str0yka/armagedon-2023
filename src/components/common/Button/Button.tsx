import { forwardRef } from 'react';

import { getClassNames } from '~utils';

import s from './Button.module.css';

interface ButtonProps extends React.ComponentProps<'button'> {
  variant: 'filled' | 'filledTonal'
  size: 'small' | 'medium' | 'large'
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
      className={getClassNames(
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
