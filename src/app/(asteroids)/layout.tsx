import { Main } from '~components';

import s from './layout.module.css';

interface AsteroidsLayoutProps {
  children: React.ReactNode;
}

export default function AsteroidsLayout({ children }: AsteroidsLayoutProps) {
  return <Main className={s.layout}>{children}</Main>;
}
