import { describe, expect, it } from "bun:test"
import { useCounterStore } from "./useCounterStore"

describe("Counter Store", () => {
  it("should show count to be zero", () => {
    const store = useCounterStore.getState()
    expect(store.count).toBe(0)
  })
})
