import Link from 'next/link';

import s from './Header.module.css';

interface HeaderProps extends React.ComponentProps<'header'> {}

export function Header(props: HeaderProps) {
  return (
    <header
      {...props}
      className={s.header}
    >
      <h1 className={s.title}>
        <Link href="/">ARMAGEDDON</Link>
      </h1>
      <p className={s.subtitle}>
        ООО “Команда им. Б. Уиллиса”.
        Взрываем астероиды с 1998 года.
      </p>
    </header>
  );
}
