/**
 * Helper type to create an intersection type that is exactly equal to the intersection of T and U.
 * This is useful when you want to ensure that a type is a subset of another type, but not a superset.
 *
 * @example
 * type A = { a: string, b: number }
 * type B = { a: string, b: number, c: boolean }
 * type C = Exact<A, B> // { a: string, b: number }
 */
type Exact<T, U extends T> = T & {
  [K in keyof U]: K extends keyof T ? U[K] : never
}
