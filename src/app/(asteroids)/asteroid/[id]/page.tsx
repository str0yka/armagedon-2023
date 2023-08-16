'use client';

import { useRequest } from '~hooks';
import { NasaApi, getDayMonthYear } from '~utils';

import s from './page.module.css';

interface AsteroidPageProps {
  params: {
    id: string
  }
}

export default function AsteroidPage({ params: { id } }: AsteroidPageProps) {
  const [asteroid, isLoading, error] = useRequest({
    request: () => NasaApi.getOne(id),
  });

  return (
    <section className={s.asteroid}>
      {isLoading && <span>loading...</span>}
      {error && <span>{error}</span>}
      {asteroid && (
        <>
          <div className={s.titleBlock}>
            <h2>
              Астероид
              {' '}
              {asteroid.name}
            </h2>
            {asteroid.is_potentially_hazardous_asteroid && <p>⚠ Опасен</p>}
            <p>
              Расчетный мин. диаметр:
              {' '}
              {Math.round(asteroid.estimated_diameter.meters.estimated_diameter_min)}
              {' '}
              метров
            </p>
            <p>
              Расчетный макс. диаметр:
              {' '}
              {Math.round(asteroid.estimated_diameter.meters.estimated_diameter_max)}
              {' '}
              метров
            </p>
          </div>
          <div className={s.listBlock}>
            <h3 className={s.listTitle}>Список всех сближений</h3>
            <ul className={s.list}>
              {asteroid.close_approach_data.map((closeApproach) => (
                <li key={closeApproach.epoch_date_close_approach}>
                  <p>
                    Дата:
                    {' '}
                    {getDayMonthYear(closeApproach.epoch_date_close_approach).dateString}
                  </p>
                  <p>
                    Скорость относительно земли:
                    {' '}
                    {Math.round(Number(closeApproach.relative_velocity.kilometers_per_second))}
                    {' '}
                    км/с
                  </p>
                  <p>
                    Расстояние до земли:
                    {' '}
                    {Math.round(Number(closeApproach.miss_distance.kilometers))}
                    {' '}
                    км
                  </p>
                  <p>
                    Движется по орбите:
                    {' '}
                    {closeApproach.orbiting_body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </section>
  );
}
