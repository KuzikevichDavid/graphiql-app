export default function objectsHaveSameKeys(...objects: object[]) {
  const startValue: string[] = [];
  const allKeys = objects.reduce(
    (prev: string[], object) => prev.concat(Object.keys(object)),
    startValue
  );
  const union = new Set(allKeys);
  return objects.every((object) => union.size === Object.keys(object).length);
}
