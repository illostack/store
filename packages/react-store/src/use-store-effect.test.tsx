import { useStoreEffect } from "@illostack/react-store";
import { createStore } from "@illostack/store";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

interface State {
  count: number;
}

const initialState: State = {
  count: 0
};

const store = createStore<State>(initialState);

const Counter = () => {
  const count = store.state.count;

  useStoreEffect(
    store,
    (state) => state.count,
    (state, prevState) => {
      if (state.count !== prevState.count) {
        console.log(
          `El contador ha cambiado de ${prevState.count} a ${state.count}`
        );
      }
    }
  );

  return (
    <div>
      <span>{count}</span>
      <button
        onClick={() => store.update((state) => ({ count: state.count + 1 }))}
      >
        Incrementar
      </button>
    </div>
  );
};

describe("useStoreEffect hook", () => {
  it("debería ejecutar el efecto cuando el estado cambie", () => {
    const consoleLogMock = vi.spyOn(console, "log");

    render(<Counter />);

    fireEvent.click(screen.getByText("Incrementar"));

    expect(consoleLogMock).toHaveBeenCalledWith(
      "El contador ha cambiado de 0 a 1"
    );

    consoleLogMock.mockRestore();
  });
});
