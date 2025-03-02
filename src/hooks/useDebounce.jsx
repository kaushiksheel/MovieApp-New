import { useEffect, useState } from "react";

export const useDebounce = (initialValue, delay = 1000) => {
  const [debouncedValue, setDebouncedValue] = useState(initialValue);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(initialValue);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [initialValue, delay]);

  return debouncedValue;
};
