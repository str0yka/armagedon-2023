'use client';

import Link from 'next/link';

import { Button } from '~ui';
import { useCart } from '~store';

import s from './Cart.module.css';

export function Cart() {
  const { items } = useCart();

  return (
    <section className={s.cart}>
      <div>
        <h2 className={s.title}>Корзина</h2>
        <span className={s.description}>
          {items.length
            ? `${items.length} астероида`
            : 'пуста'}
        </span>
      </div>
      <Link href="/ordering">
        <Button
          variant="filled"
          size="large"
        >
          Отправить
        </Button>
      </Link>
    </section>
  );
}
