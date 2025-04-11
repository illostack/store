# Advanced Usage

## Effects

### Subscribing to State Changes

You can use `useStoreEffect` to subscribe to specific changes in the state. This allows you to trigger side effects when certain parts of the state change.

```ts
useStoreEffect(store, state => state.count, (state, prevState) => {
  if (state.count !== prevState.count) {
    console.log("The count has changed");
  }
});
```

## Custom Selectors

You can pass a custom selector to the `useStore` hook to derive specific values from the store.

```ts
const count = useStore(store, state => state.count * 2);
```

## Optimizing Performance

You can optimize performance by ensuring that your selectors only subscribe to the parts of the state that are necessary.

```ts
const count = useStore(store, state => state.count);
```

By avoiding unnecessary re-renders and using memoization techniques, you can ensure your application remains performant.