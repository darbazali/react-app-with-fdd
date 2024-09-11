import { describe, expect, it, beforeEach } from "vitest"

import { useCounterStore } from "./useCounterStore"

describe("Counter Store", () => {
  beforeEach(() => {
    useCounterStore.setState({ count: 0 })
  })

  it("should show count to be zero", () => {
    const store = useCounterStore.getState()
    expect(store.count).toBe(0)
  })

  it("should increment count", () => {
    useCounterStore.getState().increment()
    expect(useCounterStore.getState().count).toBe(1)
  })

  it("should decrement count", () => {
    useCounterStore.getState().decrement()
    expect(useCounterStore.getState().count).toBe(-1)
  })
})
