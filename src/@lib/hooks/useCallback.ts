/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import { DependencyList, useMemo } from "react";

export function useCallback<T extends Function>(
  factory: T,
  _deps: DependencyList,
) {
  // useMemo가 의존성 배열에 따라 기존의 것, 새로 생성된 것을 던져줌.
  // useCallback(fn, _deps) 와 useMemo(()=>fn,_deps)는 같다
  // 그러면 useCallback 왜쓰지..?
  // 구분하는 이유: 가독성과 의도 명시
  return useMemo(() => factory, _deps);
}
