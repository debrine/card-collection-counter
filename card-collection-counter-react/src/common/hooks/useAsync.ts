import { useCallback, useEffect, useState } from 'react';

export default function useAsync<T = any>(
  callback: () => Promise<T>,
  dependencies: any[] = [],
  shouldPause: boolean = false
) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  const [value, setValue] = useState<T | null>(null);

  const memoizedCallback = useCallback(async () => {
    setLoading(true);
    setError(null);
    setValue(null);

    try {
      console.log('triggering callback');
      const result = await callback();
      setValue(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, dependencies);

  useEffect(() => {
    console.log('use effect running');
    if (!shouldPause) {
      memoizedCallback();
    }
  }, [memoizedCallback, shouldPause]);

  return {
    loading,
    error,
    value,
    refresh: memoizedCallback,
  };
}
