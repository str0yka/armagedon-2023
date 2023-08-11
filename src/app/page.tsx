import { Main } from '~components';

import { Asteroids } from './_sections';
import s from './page.module.css';

export default function Home() {
  return (
    <Main className={s.page}>
      <Asteroids />
    </Main>
  );
}
