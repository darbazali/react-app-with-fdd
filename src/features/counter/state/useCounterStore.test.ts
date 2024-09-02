import { describe, expect, it, beforeEach } from "bun:test"
import { useCounterStore } from "./useCounterStore"

describe("Counter Store", () => {
  beforeEach(() => {
    useCounterStore.setState({ count: 0 })
  })

  it("should show count to be zero", () => {
    const store = useCounterStore.getState()
    expect(store.count).toBe(0)
  })
})
