import Link from 'next/link';

import { AsteroidIcon, DoubleEndedArrow } from '~ui';
import { getDayMonthYear } from '~utils';

import { ToggleCartButton } from './ToggleCartButton';
import s from './AsteroidCard.module.css';

type AsteroidCardProps = {
  id: string,
  name: string;
  closeApproachDate: number;
  missDistance: number;
  missDistanceMeasure: keyof AsteroidCloseApproachData['miss_distance'];
  diameter: number;
  isDanger: boolean;
  cartAction?: Asteroid;
};

export function AsteroidCard({
  id,
  name,
  closeApproachDate,
  diameter,
  missDistance,
  missDistanceMeasure,
  isDanger,
  cartAction,
}: AsteroidCardProps) {
  const { dateString } = getDayMonthYear(closeApproachDate);

  return (
    <article className={s.card}>
      <Link href={`/asteroid/${id}`}>
        <span className={s.time}>
          {dateString}
        </span>
        <div className={s.info}>
          <div className={s.distance}>
            <span>
              {missDistance}
              {' '}
              {missDistanceMeasure === 'lunar' && 'лунных орбит'}
              {missDistanceMeasure === 'kilometers' && 'километров'}
            </span>
            <DoubleEndedArrow />
          </div>
          <AsteroidIcon size={diameter > 150 ? 'large' : 'small'} />
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
      </Link>
      <div className={s.actions}>
        {cartAction && <ToggleCartButton asteroid={cartAction} />}
        {isDanger && <span>⚠ Опасен</span>}
      </div>
    </article>
  );
}
