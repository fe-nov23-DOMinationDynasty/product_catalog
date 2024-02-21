export function getLocalStorage<T>(key: string, startValue: T) {
  function saveItem(value: T) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  const localData = localStorage.getItem(key);

  if (!localData) {
    saveItem(startValue);

    return [startValue, saveItem];
  }

  try {
    return [JSON.parse(localData!), saveItem];
  } catch {
    localStorage.removeItem(key);

    return [startValue, saveItem];
  }
}
