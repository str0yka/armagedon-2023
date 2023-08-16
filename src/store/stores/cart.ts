import { useSyncExternalStore } from 'react';

import { createStore } from '~store';

const initialValue: Asteroid[] = [];

const cartStore = createStore({ initialValue });

export const useCart = () => {
  const items = useSyncExternalStore(
    cartStore.subscribe,
    cartStore.getState,
    cartStore.getServerSnapshot,
  );

  const addItemInCart = (item: Asteroid) => {
    cartStore.setState([...items, item]);
  };

  const removeItemFromCart = (item: Asteroid) => {
    cartStore.setState(items.filter((cartItem) => cartItem.id !== item.id));
  };

  const clearCart = () => {
    cartStore.setState([]);
  };

  return {
    items,
    addItemInCart,
    removeItemFromCart,
    clearCart,
  };
};
