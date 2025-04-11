"use client";

import * as React from "react";
import type { Store } from "@illostack/store";

const useStoreEffect = <TState, TSelected = TState>(
  store: Store<TState>,
  selector: (state: TState) => TSelected = (s) => s as unknown as TSelected,
  effect: (state: TState, prevState: TState) => (() => void) | void
) => {
  React.useEffect(() => {
    const unsubscribe = store.effect(selector, effect);
    return unsubscribe;
  }, [store, selector, effect]);
};

export { useStoreEffect };
