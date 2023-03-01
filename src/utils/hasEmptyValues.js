export default function hasEmptyValue(obj) {
  return Object.values(obj).some((value) => value.length === 0);
}
