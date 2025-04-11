export interface Store<TState> {
  readonly state: TState;
  readonly prevState: TState;
  readonly subscriptions: Map<
    string,
    { selector: (state: TState) => unknown; callback: () => void }
  >;
  update: (updater: (prevState: TState) => TState) => void;
  subscribe: <TSelected>(
    selector: (state: TState) => TSelected
  ) => (listener: () => void) => () => void;
  getSnapshot: <TSelected>(
    selector: (state: TState) => TSelected
  ) => () => TSelected;
  emitChange: () => void;
  effect: <TSelected>(
    selector: (state: TState) => TSelected,
    effect: (state: TState, prevState: TState) => (() => void) | void
  ) => () => void;
}
