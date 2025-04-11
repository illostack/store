# API Reference

## `createStore`

Creates a new store with an initial state.

```ts
createStore(initialState: TState): Store<TState>
```

### Parameters

- `initialState`: The initial state for the store.

### Returns

- A store object that contains the state and methods to update it.

## useStore

A hook to read state values in React components.

```ts
useStore<TState, TSelected>(store: Store<TState>, selector: (state: TState) => TSelected): TSelected
```

### Parameters

- `store`: The store you want to read from.
- `selector`: A function to select a specific part of the state.

## useStoreEffect

A hook to subscribe to store updates and trigger side effects.

```ts
useStoreEffect<TState, TSelected>(store: Store<TState>, selector: (state: TState) => TSelected, effect: (state: TState, prevState: TState) => void): void
```

### Parameters

- `store`: The store you want to subscribe to.
- `selector`: A function to select a specific part of the state.
- `effect`: A function that runs when the state changes.

## Store

The `Store` object contains methods for managing state.

### Methods

- `update(updater: (state: TState) => TState)`: Update the state with a new value.
- `effect(selector: (state: TState) => TSelected, effect: (state: TState, prevState: TState) => void)`: Subscribe to changes in state.