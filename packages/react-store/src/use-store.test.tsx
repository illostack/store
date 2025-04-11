import { useStore } from "@illostack/react-store";
import { createStore } from "@illostack/store";
import "@testing-library/jest-dom";
import { act, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

interface State {
  count: number;
}

const initialState: State = {
  count: 0
};

const store = createStore<State>(initialState);

const Counter = () => {
  const count = useStore(store, (state) => state.count);

  return (
    <div>
      <span>{count}</span>
      <button
        data-testid="increment-button"
        onClick={() => store.update((state) => ({ count: state.count + 1 }))}
      >
        Incrementar
      </button>
    </div>
  );
};

describe("useStore hook", () => {
  it("debería renderizar el valor inicial del estado", () => {
    render(<Counter />);

    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("debería actualizar el estado al hacer clic en el botón", () => {
    render(<Counter />);

    act(() => {
      screen.getByTestId("increment-button").click();
    });

    expect(screen.getByText("1")).toBeInTheDocument();
  });
});
