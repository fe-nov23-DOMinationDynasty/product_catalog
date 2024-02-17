export function request<T>(product: T): Promise<T> {
  return fetch(`././api/${product}.json`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}
