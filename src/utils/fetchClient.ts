export function request<T>(product: string): Promise<T> {
  return fetch(`././api/${product}.json`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}
