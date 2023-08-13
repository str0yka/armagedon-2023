'use client';

import { useState } from 'react';

import { Button } from '~ui';
import { useRequest } from '~hooks';
import { getDayMonthYear } from '~utils';
import { NasaApi } from '~/utils/api';

import { AsteroidCard } from './AsteroidCard/AsteroidCard';

import s from './Asteroids.module.css';

export function Asteroids() {
  const [searchDate, setSearchDate] = useState(Date.now());
  const startDate = getDayMonthYear(searchDate);
  const [asteroids, isLoading, errors] = useRequest<Asteroid[]>({
    request: () => NasaApi.getNeoWsAsteroids({ startDate })
      .then((res): Asteroid[] => {
        const date = Object.keys(res)[0];

        if (asteroids) {
          return [...asteroids, ...res[date]];
        }

        return res[date];
      }),
    dependencies: [searchDate],
  });

  return (
    <section className={s.section}>
      <div className={s.titleBlock}>
        <h2 className={s.title}>Ближайшие подлёты астероидов</h2>
        <div className={s.titleButtons}>
          <button className={s.titleButton}>в километрах</button>
          <button className={s.titleButton}>в лунных орбитах</button>
        </div>
      </div>
      <div className={s.list}>
        {asteroids?.map((asteroid) => (
          <AsteroidCard
            key={asteroid.id}
            name={asteroid.name}
            isDanger={asteroid.is_potentially_hazardous_asteroid}
            closeApproachDate={asteroid.close_approach_data[0].epoch_date_close_approach}
            diameter={Math.round(asteroid.estimated_diameter.meters.estimated_diameter_max)}
            missDistance={Math.round(Number(asteroid.close_approach_data[0].miss_distance.lunar))}
          />
        ))}
        {isLoading && <span>loading...</span>}
        {errors && <span>{errors}</span>}
      </div>
      <Button
        variant="filled"
        size="large"
        onClick={() => {
          setSearchDate((prev) => prev + (1000 * 60 * 60 * 24));
        }}
        disabled={isLoading}
      >
        показать еще
      </Button>
    </section>
  );
}
