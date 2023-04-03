// Third party imports
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

// Local imports
import { CounterState } from "../types/store";

export const useCounterStore = create<CounterState>()(
  devtools(
    persist(
      (set) => ({
        counter: 0,
        increase: (by) => set((state) => ({ counter: state.counter + by })),
      }),
      {
        name: "storage",
      }
    )
  )
);
