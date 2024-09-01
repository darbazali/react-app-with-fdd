import { useCounterStore } from "../state/useCounterStore"

const Counter = () => {
  const count = useCounterStore((state) => state.count)
  const increment = useCounterStore((state) => state.increment)

  return (
    <div>
      <h1>Counter: {count}</h1>

      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default Counter
