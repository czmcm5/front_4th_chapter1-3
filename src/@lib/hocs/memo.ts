import { shallowEquals } from "../equalities";
import React, { ComponentType, useRef } from "react";

export function memo<P extends object>(
  Component: ComponentType<P>,
  _equals = shallowEquals,
) {
  const MemoComponent = (props: P) => {
    const preProps = useRef<P | null>(null);
    const preRender = useRef<JSX.Element | null>(null);

    // props 변화 감지
    if (!preProps.current || !_equals(preProps.current, props)) {
      preProps.current = props;
      preRender.current = React.createElement(Component, props); //  preRender.current = <Component {...props} />;
    }
    // props 변화 없음
    return preRender.current;
  };
  return MemoComponent;
}
