export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  let value = weakMap.get(endpoint);
  if (value === undefined) {
    value = 0;
  }
  if (value >= 5) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(endpoint, value + 1);
}
