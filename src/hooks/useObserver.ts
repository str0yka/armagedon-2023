import { useEffect, useRef } from 'react';

interface UseObserverParams {
  callback: IntersectionObserverCallback,
  options?: Omit<IntersectionObserverInit, 'root'>,
  dependencies?: any[],
  validate?: boolean
}

export const useObserver = <
  RootElement extends Element,
  ObserverElement extends Element,
>({
    callback,
    options,
    dependencies = [],
    validate = true,
  }: UseObserverParams) => {
  const rootRef = useRef<RootElement>(null);
  const observerRef = useRef<ObserverElement>(null);
  const observer = useRef<IntersectionObserver | null>();

  useEffect(() => {
    if (validate && observerRef.current && rootRef.current) {
      if (observer.current) {
        observer.current?.disconnect();
        observer.current = null;
      }

      observer.current = new IntersectionObserver(callback, options);
      observer.current?.observe(observerRef.current);
    }
  }, dependencies);

  return { rootRef, observerRef };
};
