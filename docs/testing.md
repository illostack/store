# Testing

## Writing Tests for `useStore`

To test components that use `useStore`, use the `@testing-library/react` testing utilities. The library allows you to render your components and simulate user interactions.

### Example Test

```ts
import { render, screen } from "@testing-library/react";
import { useStore } from "@illostack/react-store";
import { createStore } from "@illostack/store";

const store = createStore({
  count: 0
});

const Counter = () => {
  const count = useStore(store, state => state.count);
  return <div>{count}</div>;
};

test("renders initial count", () => {
  render(<Counter />);
  expect(screen.getByText("0")).toBeInTheDocument();
});
```

### Testing Effects with `useStoreEffect`

You can test `useStoreEffect` by simulating state changes and verifying that the effect runs as expected.

```ts
import { render } from "@testing-library/react";
import { useStoreEffect } from "@illostack/react-store";
import { createStore } from "@illostack/store";

const store = createStore({
  count: 0
});

const Counter = () => {
  useStoreEffect(store, state => state.count, () => {
    console.log("Effect triggered");
  });
  
  return <div>{store.state.count}</div>;
};

test("should trigger effect when count changes", () => {
  render(<Counter />);
  store.update(state => ({ count: state.count + 1 }));
  expect(console.log).toHaveBeenCalledWith("Effect triggered");
});
```