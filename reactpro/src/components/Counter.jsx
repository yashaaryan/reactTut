import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [incrementBy,setIncrementBy] = useState(1);

  function increment() {
    setCount(count + incrementBy);
  }

  function decrement() {
    setCount(count - incrementBy);
  }
  function insrease(){
    setIncrementBy(incrementBy+1);
  }

  function derease(){
    setIncrementBy(incrementBy-1);
  }
  return (
    <div>
      <h1>Count value is:{count}</h1>
      <button onClick={increment}>click</button>
      <button onClick={decrement}>dec</button>
      <h1>increment :{incrementBy}</h1>
      <button onClick={insrease}> increse</button>
      <button onClick={derease}> derease</button>
    </div>
  );
}
