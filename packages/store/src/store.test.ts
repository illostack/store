import { describe, it, expect, vi } from "vitest";

import { createStore } from "./store";

describe("react-store", () => {
  it("should update state correctly", () => {
    const store = createStore({ count: 0 });

    store.update((prev) => ({ count: prev.count + 1 }));

    expect(store.state.count).toBe(1);
    expect(store.prevState.count).toBe(0);
  });

  it("should notify subscriber on relevant change", () => {
    const store = createStore({ count: 0 });
    const callback = vi.fn();

    const unsubscribe = store.subscribe((s) => s.count)(callback);

    store.update((s) => ({ count: s.count + 1 }));
    expect(callback).toHaveBeenCalledTimes(1);

    store.update((s) => ({ count: s.count + 1 }));
    expect(callback).toHaveBeenCalledTimes(2);

    unsubscribe();

    store.update((s) => ({ count: s.count + 1 }));
    expect(callback).toHaveBeenCalledTimes(2); // No más llamadas
  });

  it("should not call subscriber if value didn't change", () => {
    const store = createStore({ count: 1 });
    const callback = vi.fn();

    store.subscribe((s) => s.count)(callback);
    store.update((s) => ({ ...s }));

    expect(callback).not.toHaveBeenCalled();
  });
});
