import { useState } from 'react';
import { StorageService } from '../services/storage.service';

export const useLocalStorage = <T>(key: string, initialValue: T): [T, (value: T | ((val: T) => T)) => void] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    return StorageService.get(key, initialValue);
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      StorageService.set(key, valueToStore);
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
};
