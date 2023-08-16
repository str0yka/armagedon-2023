'use client';

import { useLayoutEffect } from 'react';
import { useRouter } from 'next/navigation';

import { useCart } from '~store';

interface NonEmptyCartProviderProps {
  children: React.ReactNode;
}

export function NonEmptyCartProvider({ children }: NonEmptyCartProviderProps) {
  const router = useRouter();
  const { items } = useCart();

  useLayoutEffect(() => {
    if (!items.length) {
      router.push('/');
    }
  }, []);

  return children;
}
