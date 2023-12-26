function important<T extends string>(value: T): T {
  return `${value} !important` as T;
}

export default important;
