# FAQ

## How do I use @illostack/store with frameworks other than React?

`@illostack/store` is framework-agnostic, so you can use it with any JavaScript framework. Simply install and use it just like the React version but without the `useStore` and `useStoreEffect` hooks.

## Can I use @illostack/react-store in a non-React environment?

No, `@illostack/react-store` is specifically designed for React. If you need a framework-agnostic store, use `@illostack/store`.

## How do I test components using the `useStore` hook?

You can use `@testing-library/react` along with Jest or Vitest for testing. Ensure that you render your components, and use the `getByText` or `queryByText` to verify the state.

## How do I handle large-scale state management?

For larger applications, you can split your stores and use multiple `useStore` hooks to access different parts of the state. You can also consider using state selectors to reduce unnecessary re-renders.
