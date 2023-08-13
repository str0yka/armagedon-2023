import { useSyncExternalStore } from 'react';
import { NasaApi } from '~utils';

interface CreateStoreParams<T> {
  initialValue: T
}

const createStore = <T>({ initialValue }: CreateStoreParams<T>) => {
  const store = {
    state: initialValue,
    setState: (newValue: T) => {
      store.state = newValue;
      store.listeners.forEach(((listener) => listener()));
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

interface AsteroidsStoreState {
  asteroids: Asteroid[],
  asteroidsInCart: Asteroid[],
  status: 'loading' | 'loaded' | 'error'
}

const initialValue: AsteroidsStoreState = {
  asteroids: [],
  asteroidsInCart: [],
  status: 'loaded',
};

const asteroidsStore = createStore<AsteroidsStoreState>({
  initialValue,
});

export const useAsteroids = () => {
  const asteroids = useSyncExternalStore(
    asteroidsStore.subscribe,
    asteroidsStore.getState,
  );

  const fetchAsteroids = async (params: {
    startDate: {
      day: number,
      month: number,
      year: number,
    },
    endDate?: {
      day: number,
      month: number,
      year: number,
    }
  }) => {
    asteroidsStore.setState({
      ...asteroids,
      status: 'loading',
    });

    try {
      const newAsteroids = await NasaApi.getNeoWsAsteroids(params);
      const date = Object.keys(newAsteroids)[0];
      asteroidsStore.setState({
        ...asteroids,
        status: 'loaded',
        asteroids: [...asteroids.asteroids, ...newAsteroids[date]],
      });
    } catch (error) {
      asteroidsStore.setState({
        ...asteroids,
        status: 'error',
      });
    }
  };

  return {
    status: asteroids.status,
    asteroids: asteroids.asteroids,
    asteroidsInCart: asteroids.asteroidsInCart,
    fetchAsteroids,
  };
};
