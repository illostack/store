import { Store } from "./types";
import { shallowEqual } from "./utils";

const createStore = <TState>(initialState: TState): Store<TState> => {
  let state = initialState;
  let prevState = initialState;
  const subscriptions = new Map<
    string,
    { selector: (state: TState) => unknown; callback: () => void }
  >();
  let idCounter = 0;

  const update = (updater: (prevState: TState) => TState) => {
    prevState = state;
    state = updater(state);
    emitChange();
  };

  const subscribe = <TSelected>(selector: (state: TState) => TSelected) => {
    return (callback: () => void) => {
      const callbackId = (idCounter++).toString();
      subscriptions.set(callbackId, {
        selector,
        callback
      });

      return () => {
        subscriptions.delete(callbackId);
      };
    };
  };

  const getSnapshot = <TSelected = TState>(
    selector: (state: TState) => TSelected
  ) => {
    let lastSnapshot = selector(state);
    return () => {
      const newSnapshot = selector(state);
      if (shallowEqual(lastSnapshot, newSnapshot)) {
        return lastSnapshot;
      }
      lastSnapshot = newSnapshot;
      return newSnapshot;
    };
  };

  const emitChange = () => {
    for (const [, { selector, callback }] of subscriptions.entries()) {
      if (!shallowEqual(selector(prevState), selector(state))) {
        callback();
      }
    }
  };

  const effect = <TSelected>(
    selector: (state: TState) => TSelected,
    effectCallback: (state: TState, prevState: TState) => (() => void) | void
  ) => {
    let cleanUp = effectCallback(state, prevState);

    const unsubscribe = subscribe(selector)(() => {
      cleanUp?.();
      cleanUp = effectCallback(state, prevState);
    });

    return () => {
      cleanUp?.();
      unsubscribe();
    };
  };

  return {
    get state() {
      return state;
    },
    get prevState() {
      return prevState;
    },
    get subscriptions() {
      return subscriptions;
    },
    update,
    subscribe,
    getSnapshot,
    emitChange,
    effect
  };
};

export { createStore };
