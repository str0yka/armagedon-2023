import React from 'react';

import s from './Main.module.css';

interface MainProps extends React.ComponentProps<'main'> {}

export function Main({ children, ...otherProps }: MainProps) {
  return (
    <main
      {...otherProps}
      className={s.main}
    >
      <div className={s.backgroundImage} />
      {children}
    </main>
  );
}
