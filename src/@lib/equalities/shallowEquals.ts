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
  // null, undifined
  if (objA === null && objB === null) return true;
  if (objA === undefined && objB === undefined) return true;
  if (
    objA === null ||
    objB === null ||
    objA === undefined ||
    objB === undefined
  )
    return false;

  // 배열
  if (Array.isArray(objA) && Array.isArray(objB)) {
    let i;
    for (i = 0; i < objA.length; i++) {
      if (objA[i] !== objB[i]) {
        return false;
      }
    }
    return true;
  }

  // 배열 외 객체
  if (typeof objA === "object" && typeof objB === "object") {
    const objA_keys = Object.keys(objA).sort();
    const objB_keys = Object.keys(objB).sort();
    const objA_values = Object.values(objA).sort();
    const objB_values = Object.values(objB).sort();

    let i;
    for (i = 0; i < objA_keys.length; i++) {
      if (objA_keys[i] !== objB_keys[i] || objA_values[i] !== objB_values[i]) {
        return false;
      }
    }
    return true;
  }

  return objA == objB;
}
