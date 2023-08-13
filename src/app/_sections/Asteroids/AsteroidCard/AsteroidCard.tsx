import { AsteroidIcon, Button, DoubleEndedArrow } from '~ui';

import s from './AsteroidCard.module.css';
import { getDayMonthYear } from '~utils';

type AsteroidCardProps = {
  name: string,
  closeApproachDate: number,
  missDistance: number
  diameter: number
  isDanger: boolean
};

export function AsteroidCard({
  name,
  closeApproachDate,
  diameter,
  missDistance,
  isDanger,
}: AsteroidCardProps) {
  const {
    day,
    monthName,
    year,
  } = getDayMonthYear(closeApproachDate);

  return (
    <article className={s.card}>
      <h3 className={s.time}>
        {day}
        {' '}
        {monthName}
        {' '}
        {year}
      </h3>
      <div className={s.info}>
        <div className={s.distance}>
          <span>
            {missDistance}
            {' '}
            лунные орбиты
          </span>
          <DoubleEndedArrow />
        </div>
        <AsteroidIcon size="large" />
        <div className={s.asteroidInfo}>
          <span className={s.asteroidName}>{name}</span>
          <span className={s.asteroidDiameter}>
            Ø
            {' '}
            {diameter}
            {' '}
            м
          </span>
        </div>
      </div>
      <div className={s.actions}>
        <Button
          variant="filledTonal"
          size="small"
        >
          ЗАКАЗАТЬ
        </Button>
        {isDanger && <span>⚠ Опасен</span>}
      </div>
    </article>
  );
}
