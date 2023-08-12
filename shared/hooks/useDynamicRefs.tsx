import { createRef, useEffect, useRef } from "react";

export function useDynamicRefs(length: number) {
  const refs = useRef<Array<React.RefObject<HTMLLIElement | HTMLDivElement>>>(
    []
  );

  // Update refs when the length changes
  useEffect(() => {
    refs.current = Array.from(
      { length },
      (_, i) => refs.current[i] || createRef()
    );
  }, [length]);

  return refs;
}
