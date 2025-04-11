"use client";

import type { Store } from "@illostack/store";
import * as React from "react";

const useStore = <TState, TSelected = TState>(
  store: Store<TState>,
  selector: (state: TState) => TSelected = (s) => s as unknown as TSelected
) => {
  const getSnapshotFn = React.useMemo(
    () => store.getSnapshot(selector),
    [store, selector]
  );
  const subscribeFn = React.useCallback(
    (listener: () => void) => store.subscribe(selector)(listener),
    [store, selector]
  );

  const value = React.useSyncExternalStore(
    subscribeFn,
    getSnapshotFn,
    getSnapshotFn
  );

  return value as TSelected;
};

export { useStore };
