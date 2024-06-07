export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot Process');
  }
  for (const [key, value] of map) {
    if (value === 1) {
      map.set(key, 100);
    }
  }
  return map;
}
