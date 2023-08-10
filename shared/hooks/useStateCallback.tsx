/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useRef, useState } from 'react';

export function useStateCallback<S>(
  initialState: S | (() => S)
): [S, (state: S, cb?: any) => void] {
  const [state, setState] = useState(initialState);
  const cbRef = useRef<((state: S) => void) | undefined>(undefined); // init mutable ref container for callbacks

  const setStateCallback = useCallback((state: S, cb?: (state: S) => void) => {
    cbRef.current = cb; // store current, passed callback in ref
    setState(state);
  }, []); // keep object reference stable, exactly like `useState`

  useEffect(() => {
    // cb.current is `undefined` on initial render,
    // so we only invoke callback on state *updates*
    if (cbRef.current) {
      cbRef.current(state);
      cbRef.current = undefined; // reset callback after execution
    }
  }, [state]);

  return [state, setStateCallback];
}
