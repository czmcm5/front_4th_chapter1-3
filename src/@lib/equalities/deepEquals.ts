/** 깊은 비교
 * (1) 원시 자료형: 값 비교
 * (2) 참조 자료형: 값 비교
 *
 *  1. 기본 타입이거나 null인 경우 처리
 *  2. 둘 다 객체인 경우:
 *    - 배열인지 확인
 *    - 객체의 키 개수가 다른 경우 처리
 *    - 재귀적으로 각 속성에 대해 deepEquals 호출
 */
export function deepEquals<T>(objA: T, objB: T): boolean {
  if (objA === objB) return true;

  if (Array.isArray(objA) && Array.isArray(objB)) {
    if (objA.length !== objB.length) return false;

    return objA.every((v, idx) => deepEquals(v, objB[idx]));
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

    return a.every(([key, value]) => deepEquals(objB[key], value));
  }
  return false;
}
