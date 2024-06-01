export default function iterateThroughObject(reportWithIterator) {
  const items = [...reportWithIterator];
  return items.join(' | ');
}
