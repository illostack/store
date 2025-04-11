const shallowEqual = <T>(objA: T, objB: T): boolean => {
  if (Object.is(objA, objB)) return true;

  if (
    typeof objA !== "object" ||
    objA === null ||
    typeof objB !== "object" ||
    objB === null
  ) {
    return false;
  }

  if (objA instanceof Date && objB instanceof Date) {
    return objA.getTime() === objB.getTime();
  }

  if (objA instanceof Map && objB instanceof Map) {
    if (objA.size !== objB.size) return false;
    for (const [key, value] of objA) {
      if (!objB.has(key) || !Object.is(value, objB.get(key))) return false;
    }
    return true;
  }

  if (objA instanceof Set && objB instanceof Set) {
    if (objA.size !== objB.size) return false;
    for (const value of objA) {
      if (!objB.has(value)) return false;
    }
    return true;
  }

  const keysA = Object.keys(objA);
  if (keysA.length !== Object.keys(objB).length) return false;

  for (let i = 0; i < keysA.length; i++) {
    const key = keysA[i] as string;
    if (
      !Object.prototype.hasOwnProperty.call(objB, key) ||
      !Object.is(
        (objA as Record<string, unknown>)[key],
        (objB as Record<string, unknown>)[key]
      )
    ) {
      return false;
    }
  }
  return true;
};

export { shallowEqual };
