# IlloStack Store

@illostack/react-store and @illostack/store are lightweight state management libraries for JavaScript and TypeScript applications. `@illostack/react-store` is specifically designed for React, while `@illostack/store` is a framework-agnostic version of the same core functionality.

## Features

- **State Management**: Easily manage global state across your application.
- **React Support**: `@illostack/react-store` provides optimized hooks for use in React components.
- **Framework-Agnostic**: `@illostack/store` works with any JavaScript framework.
- **Easy to Use**: Simple API with hooks to manage and subscribe to state changes.
- **Efficient**: Minimal re-renders and performance optimizations.

## Installation

### React Usage

To install the React-specific package:

```bash
npm install @illostack/react-store
```

### General Usage (Framework-Agnostic)

To install the core package:

```bash
npm install @illostack/store
```

## Usage

### Basic Example for React

1. **Create a Store**:
   
   First, create a store using `createStore`:

   ```ts
   import { createStore } from "@illostack/react-store";

   const store = createStore({
     count: 0
   });
   ```

2. **Use `useStore` Hook**:

   Use the `useStore` hook to access state in a React component:

   ```ts
   import { useStore } from "@illostack/react-store";

   const Counter = () => {
     const count = useStore(store, state => state.count);
     return <div>{count}</div>;
   };
   ```

3. **Use `useStoreEffect` Hook**:

   Use `useStoreEffect` to trigger side effects when the state changes:

   ```ts
   import { useStoreEffect } from "@illostack/react-store";

   const Counter = () => {
     useStoreEffect(store, state => state.count, (state, prevState) => {
       console.log("State changed:", state.count);
     });

    // No re-renders
    ...
   };
   ```

### For Non-React Frameworks

You can use `@illostack/store` in any JavaScript framework to manage state without the React hooks. Here's an example of creating a store:

```ts
import { createStore } from "@illostack/store";

const store = createStore({
  count: 0
});
```

## Documentation

For more detailed usage, advanced guides, and API reference, check the full documentation:

- [Introduction](docs/introduction.md)
- [Concepts](docs/concepts.md)
- [Usage Guide](docs/usage-guide.md)
- [Advanced Usage](docs/advanced.md)
- [Testing](docs/testing.md)
- [API Reference](docs/api-reference.md)
- [Contribution Guidelines](docs/contribution.md)
- [FAQ](docs/faq.md)

## Contributing

We welcome contributions! To contribute, please follow these steps:

1. Fork the repository.
2. Clone your fork locally.
3. Create a new branch.
4. Make your changes.
5. Commit your changes.
6. Push to your fork.
7. Open a pull request.

Please ensure that your code follows the existing style and includes tests where applicable.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
