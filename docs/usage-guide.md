# Usage Guide

## Installation

### Installation for React

```bash
npm install @illostack/react-store
```

### Installation for the Store

```bash
npm install @illostack/store
```

## Creating a Store

You can create a store using `createStore`, which accepts an object defining the initial state.

```ts
import { createStore } from "@illostack/store";

const store = createStore({
  count: 0
});
```

## Using in React

`useStore` Hook

```tsx
import { useStore } from "@illostack/react-store";

const Counter = () => {
  const count = useStore(store, state => state.count);
  return <div>{count}</div>;
};
```

`useStoreEffect` Hook

```tsx
import { useStoreEffect } from "@illostack/react-store";

const Counter = () => {
  useStoreEffect(store, state => state.count, (state, prevState) => {
    console.log("Count changed", state.count);
  });
  
  // No re-renders
  ...
};
```

## Updating State

You can update the state of the store using the `update` method.

```ts
store.update(state => ({ count: state.count + 1 }));
```

