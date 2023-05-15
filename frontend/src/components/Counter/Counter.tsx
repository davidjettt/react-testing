import { useState } from "react";

export interface ICounterProps {
}

export default function Counter (props: ICounterProps) {
    const [count, setCount] = useState<number>(0)
  return (
    <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <div role='count'>
            Count is {count}
        </div>
    </div>
  );
}
