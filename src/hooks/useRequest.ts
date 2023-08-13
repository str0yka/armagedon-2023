import { useEffect, useState } from 'react';

interface UseRequestParams<T> {
  request: () => Promise<T>,
  validate?: boolean
  dependencies?: any[]
}

export const useRequest = <T>({
  request,
  validate = true,
  dependencies = [],
}: UseRequestParams<T>): [T | undefined, boolean, string] => {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (validate) {
      setIsLoading(true);
      setError('');
      request()
        .then((response) => setData(response))
        .catch((responseError) => setError(responseError.message))
        .finally(() => setIsLoading(false));
    }
  }, dependencies);

  return [data, isLoading, error];
};
