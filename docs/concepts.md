# Concepts

## Store

A `store` is a container for your application's global state. You can create a store using `createStore`, which accepts an initial state and provides methods to update the state and subscribe to changes.

```ts
import { createStore } from "@illostack/store";

const store = createStore({
  count: 0
});
```

## Hooks

### useStore

The `useStore` hook allows you to access the state inside React components. It takes the store and a state selector and returns the selected state value.

```ts
import { useStore } from "@illostack/react-store";

const Counter = () => {
  const count = useStore(store, state => state.count);
  return <div>{count}</div>;
};
```

### useStoreEffect

The `useStoreEffect` hook allows you to run side effects when the state changes. It takes the store, a state selector, and an effect that runs when the state changes.

```ts
useStoreEffect(store, state => state.count, (state, prevState) => {
  console.log("State has changed", state.count);
});
```