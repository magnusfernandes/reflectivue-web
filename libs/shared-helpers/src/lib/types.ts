export const ObjectTypedKeys = Object.keys as <T extends object>(
  obj: T
) => Array<keyof T>;
