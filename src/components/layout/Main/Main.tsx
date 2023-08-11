import { getClassName } from '~utils';

import s from './Main.module.css';

interface MainProps extends React.ComponentProps<'main'> {}

export function Main({ children, ...otherProps }: MainProps) {
  return (
    <main
      {...otherProps}
      className={getClassName(s.main, otherProps.className)}
    >
      <div className={s.backgroundImage} />
      {children}
    </main>
  );
}
