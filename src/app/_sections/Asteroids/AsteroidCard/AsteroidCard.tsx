import { AsteroidIcon, Button, DoubleEndedArrow } from '~ui';

import s from './AsteroidCard.module.css';

export function AsteroidCard() {
  return (
    <article className={s.card}>
      <h3 className={s.time}>12 сентября 2023</h3>
      <div className={s.info}>
        <div className={s.distance}>
          <span>3 лунные орбиты</span>
          <DoubleEndedArrow />
        </div>
        <AsteroidIcon size="large" />
        <div className={s.asteroidInfo}>
          <span className={s.asteroidName}>2021 FQ</span>
          <span className={s.asteroidDiameter}>Ø 85 м</span>
        </div>
      </div>
      <div className={s.actions}>
        <Button
          variant="filledTonal"
          size="small"
        >
          ЗАКАЗАТЬ
        </Button>
        <span>⚠ Опасен</span>
      </div>
    </article>
  );
}
