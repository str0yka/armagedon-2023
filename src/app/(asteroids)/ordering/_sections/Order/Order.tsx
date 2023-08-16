'use client';

import { useRef, useEffect } from 'react';

import { useCart } from '~store';
import { AsteroidCard } from '~/app/(asteroids)/_components';

import s from './Order.module.css';

export function Order() {
  const { items, clearCart } = useCart();
  const asteroids = useRef<Asteroid[]>(items);
  useEffect(() => {
    clearCart();
  }, []);

  return (
    <section>
      <h2 className={s.title}>Заказ оформлен!</h2>
      <div className={s.list}>
        {asteroids.current.map((asteroid) => (
          <AsteroidCard
            key={asteroid.id}
            id={asteroid.id}
            name={asteroid.name}
            isDanger={asteroid.is_potentially_hazardous_asteroid}
            closeApproachDate={asteroid.close_approach_data[0].epoch_date_close_approach}
            diameter={Math.round(asteroid.estimated_diameter.meters.estimated_diameter_max)}
            missDistance={
              Math.round(Number(asteroid.close_approach_data[0].miss_distance.lunar))
            }
            missDistanceMeasure="lunar"
          />
        ))}
      </div>
    </section>
  );
}
