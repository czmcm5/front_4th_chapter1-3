/** 얕은 비, 깊은 비교 중 공통 부분  */
export function baseEquals<T>(objA: T, objB: T, is = Object.is): boolean {
  if (objA === objB) return true;

  if (Array.isArray(objA) && Array.isArray(objB)) {
    if (objA.length !== objB.length) return false;

    return objA.every((v, idx) => is(v, objB[idx]));
  }

  if (
    typeof objA === "object" &&
    typeof objB === "object" &&
    objA !== null &&
    objB !== null
  ) {
    const a = Object.entries(objA);
    const b = Object.entries(objB);

    if (a.length !== b.length) return false;

    return a.every(([key, value]) => is(objB[key], value));
  }
  return false;
}

function shallowEquals2<T>(objA: T, objB: T): boolean {
  return baseEquals(objA, objB, (a, b) => {
    return a === b;
  });
}

function deepEquals2<T>(objA: T, objB: T): boolean {
  return baseEquals(objA, objB, baseEquals); // 재귀함수 사용
}

console.log(shallowEquals2(1, 1));
console.log(deepEquals2(1, 1));
