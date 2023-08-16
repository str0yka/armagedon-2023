'use client';

import { useState } from 'react';

import { useObserver, useRequest } from '~hooks';
import { getClassName, getDayMonthYear } from '~utils/helpers';
import { NasaApi } from '~/utils/api';

import { AsteroidCard } from '../../_components';
import s from './Asteroids.module.css';

export function Asteroids() {
  const [missDistanceMeasure, setMissDistanceMeasure] = useState<
  keyof AsteroidCloseApproachData['miss_distance']
  >('lunar');
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

  const { rootRef, observerRef } = useObserver<HTMLDivElement, HTMLDivElement>({
    callback: (entries) => {
      if (!isLoading && asteroids) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSearchDate((prev) => prev + 1000 * 60 * 60 * 24);
          }
        });
      }
    },
    options: {
      rootMargin: '0px 0px 75px',
      threshold: 0,
    },
    dependencies: [isLoading],
  });

  return (
    <section className={s.section}>
      <div className={s.titleBlock}>
        <h2 className={s.title}>Ближайшие подлёты астероидов</h2>
        <div className={s.titleButtons}>
          <button
            className={getClassName({
              [s.titleButton]: true,
              [s.acitve]: missDistanceMeasure === 'kilometers',
            })}
            onClick={() => setMissDistanceMeasure('kilometers')}
          >
            в километрах
          </button>
          <button
            className={getClassName({
              [s.titleButton]: true,
              [s.acitve]: missDistanceMeasure === 'lunar',
            })}
            onClick={() => setMissDistanceMeasure('lunar')}
          >
            в лунных орбитах
          </button>
        </div>
      </div>
      <div
        ref={rootRef}
        className={s.list}
      >
        {asteroids?.map((asteroid) => (
          <AsteroidCard
            key={asteroid.id}
            id={asteroid.id}
            name={asteroid.name}
            isDanger={asteroid.is_potentially_hazardous_asteroid}
            closeApproachDate={asteroid.close_approach_data[0].epoch_date_close_approach}
            diameter={Math.round(asteroid.estimated_diameter.meters.estimated_diameter_max)}
            missDistance={
              Math.round(Number(asteroid.close_approach_data[0].miss_distance[missDistanceMeasure]))
            }
            missDistanceMeasure={missDistanceMeasure}
            cartAction={asteroid}
          />
        ))}
        {isLoading && <span>loading...</span>}
        {errors && <span>{errors}</span>}
        <div ref={observerRef} />
      </div>
    </section>
  );
}
