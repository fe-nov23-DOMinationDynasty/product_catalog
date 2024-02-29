export function request<T>(product: string): Promise<T> {
  return fetch(`./api/${product}.json`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}

export function wait(delay: number) {
  return new Promise(
    (resolve) => setTimeout(() => resolve(delay), delay)
  );
// eslint-disable-next-line padding-line-between-statements
};
