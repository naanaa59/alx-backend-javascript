export default function cleanSet(set, startString) {
  const seperator = '-';
  if (startString === '' || typeof (startString) !== 'string') {
    return '';
  }
  return Array.from(set)
    .filter((str) => str && str.startsWith(startString))
    .map((str) => str.replace(startString, ''))
    .join(seperator);
}
