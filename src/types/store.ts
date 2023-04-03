/* Defining the interface for the counter state. */
export interface CounterState {
  counter: number;
  increase: (by: number) => void;
}
