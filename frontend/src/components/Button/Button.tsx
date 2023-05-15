import useCounter from "../useCounter/useCounter";

export interface IButtonProps {
}

export default function Button (props: IButtonProps) {
  const { count, increment, decrement } = useCounter()
  return (
    <>
        <button onClick={increment}>
          increment
        </button>
        <button onClick={decrement}>
          decrement
        </button>
        <div>
          Count is {count}
        </div>
    </>
  );
}
