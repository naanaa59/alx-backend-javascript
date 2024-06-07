export default function cleanSet(set, startString) {
  const seperator = '-';
  if (startString === '' || typeof (startString) !== 'string') {
    return '';
  }
  return Array.from(set)
    .filter((str) => str.includes(startString))
    .map((str) => str.replace(startString, ''))
    .join(seperator);
}
