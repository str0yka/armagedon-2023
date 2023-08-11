import { AsteroidCard } from './AsteroidCard/AsteroidCard';
import s from './Asteroids.module.css';

export function Asteroids() {
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
        {new Array(15).fill(null).map((_, index) => (
          <AsteroidCard key={index} />
        ))}
      </div>
    </section>
  );
}
