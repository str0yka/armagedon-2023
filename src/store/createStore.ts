interface CreateStoreParams<T> {
  initialValue: T;
}

export const createStore = <T>({ initialValue }: CreateStoreParams<T>) => {
  const store = {
    state: initialValue,
    setState: (newValue: T) => {
      store.state = newValue;
      store.listeners.forEach((listener) => listener());
    },
    getState: () => store.state,
    listeners: new Set<() => void>(),
    subscribe: (callback: () => void) => {
      store.listeners.add(callback);
      return () => {
        store.listeners.delete(callback);
      };
    },
    getServerSnapshot: () => store.state,
  };

  return store;
};
