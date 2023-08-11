import React from 'react';

import { getClassNames } from '~utils';

import s from './Main.module.css';

interface MainProps extends React.ComponentProps<'main'> {}

export function Main({ children, ...otherProps }: MainProps) {
  return (
    <main
      {...otherProps}
      className={getClassNames(s.main, otherProps.className)}
    >
      <div className={s.backgroundImage} />
      {children}
    </main>
  );
}
