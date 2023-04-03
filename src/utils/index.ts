/**
 * It takes a number and returns a string
 * @param {number} value - number - The value to convert to rems.
 * @returns A string
 */
export function pxToRem(value: number): string {
  return `${value / 16}rem`;
}

/**
 * "If the value is undefined, throw an error, otherwise return the value."
 * 
 * The above function is a good example of a function that is generic. The generic type parameter T is
 * used to indicate that the function can be used with any type
 * @param {T | undefined} value - T | undefined
 * @returns A function that takes a value of type T and returns a value of type T.
 */
export function required<T>(value: T | undefined): T {
  if (!value) {
    throw new Error("value is required");
  }
  return value;
}
