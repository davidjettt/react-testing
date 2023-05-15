import { useState, useCallback } from "react";


export default function useCounter () {
    const [count, setCount] = useState<number>(0)

    const increment = useCallback(() => {
        setCount((prev) => prev + 1)
    }, [count])

    const decrement = useCallback(() => {
        setCount((prev) => prev - 1)
    }, [count])

  return { count, increment, decrement }
}
