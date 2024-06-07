export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  const value = weakMap.get(endpoint);
  if (value >= 5) {
    throw new Error('Endpoint load is high');
  }
  if (value === undefined) {
    weakMap.set(endpoint, 1);
  } else {
    weakMap.set(endpoint, value + 1);
  }
}
