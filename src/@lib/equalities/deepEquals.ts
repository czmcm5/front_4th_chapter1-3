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
  if (JSON.stringify(objA) === JSON.stringify(objB)) return true;

  if (
    objA !== null &&
    objB !== null &&
    typeof objA === "object" &&
    typeof objB === "object"
  ) {
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

  return objA === objB;
}
