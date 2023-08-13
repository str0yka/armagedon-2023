import { useEffect, useRef } from 'react';

interface UseObserverParams {
  callback: IntersectionObserverCallback,
  options?: Omit<IntersectionObserverInit, 'root'>,
  dependencies?: any[],
  validate?: boolean
}

export const useObserver = <
  RootType extends Element,
  ObserverRef extends Element,
>({
    callback,
    options,
    dependencies = [],
    validate = true,
  }: UseObserverParams) => {
  const rootRef = useRef<RootType>(null);
  const nodeRef = useRef<ObserverRef>(null);
  const observer = useRef<IntersectionObserver | null>();

  useEffect(() => {
    if (validate && nodeRef.current && rootRef.current) {
      if (observer.current) {
        observer.current?.disconnect();
        observer.current = null;
      }

      observer.current = new IntersectionObserver(callback, options);
      observer.current?.observe(nodeRef.current);
    }
  }, dependencies);

  return { rootRef, nodeRef };
};
