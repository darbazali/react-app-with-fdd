import { useCounterStore } from "../state/useCounterStore"

const Counter = () => {
  const count = useCounterStore((state) => state.count)

  return (
    <div>
      <h1>Counter: {count}</h1>
    </div>
  )
}

export default Counter
