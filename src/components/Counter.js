import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  function handelCounter() {
    setCounter((counter) => counter + 1);
    console.log("counter 1 ->", counter);
    setCounter((counter) => counter + 1);
    console.log("counter 2 ->", counter);
    // setCounter(counter + 1);https://youtube.com/
    // console.log("handelCounter............");
  }
  return <button onClick={handelCounter}> {counter}</button>;
  //   <div>Counter</div>;
}
