import { DependencyList } from "react";
import { shallowEquals } from "../equalities";
import { useRef } from "./useRef";

export function useMemo<T>(
  factory: () => T,
  _deps: DependencyList,
  _equals = shallowEquals,
): T {
  // 이전 의존성을 기억. 초기 설정: null
  const preDeps = useRef<DependencyList | null>(null);
  const preFacotry = useRef<T | null>(null);

  // 이전 의존성이 없는 상태 || 이전 의존성과 현재 의존성이 다른 경우
  // = 의존성이 변한 경우
  if (!preDeps.current || !_equals(preDeps.current, _deps)) {
    // 새로 저장
    preDeps.current = _deps;
    preFacotry.current = factory();
  }

  // 변하지 않을 경우, 기존에 저장된 함수 return
  return preFacotry.current!; // null이 아님을 명시
}
