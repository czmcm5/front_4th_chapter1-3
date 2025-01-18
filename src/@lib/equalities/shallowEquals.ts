/** 얕은 비교
 * (1) 원시 자료형: 값 비교
 * (2) 참조 자료형: 참조되는 위치 비교
 *
 *  // 1. 두 값이 정확히 같은지 확인 (참조가 같은 경우)
 *  // 2. 둘 중 하나라도 객체가 아닌 경우 처리
 *  // 3. 객체의 키 개수가 다른 경우 처리
 *  // 4. 모든 키에 대해 얕은 비교 수행
 */

/**
 * == 연산자는 얕은 비교를 하지 않는다?
 * == 연산자는 느슨한 동등 비교를 하는 연산자로 타입을 변환해서 비교하는 방식이다.
 * 얕은 비교는 객체의 1단계 속성 값까지 비교하는 것을 의미한다.
 */
export function shallowEquals<T>(objA: T, objB: T): boolean {
  if (objA === objB) return true;

  if (Array.isArray(objA) && Array.isArray(objB)) {
    if (objA.length !== objB.length) return false;

    return objA.every((v, idx) => v === objB[idx]);
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

    return a.every(([key, value]) => objB[key] === value);
  }
  return false;
}
