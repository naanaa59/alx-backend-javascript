export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  let value = weakMap.get(endpoint) || 0;
  value += 1;
  if (value >= 5) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(endpoint, value);
}
