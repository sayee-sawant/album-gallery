import { useRef, useState } from "react";

export default function UseRef() {
  let num = useRef(34);
  const [no, setNo] = useState(0);
  //   const [no, setNo] = useState(0);
  function handelCount() {
    setNo(no + 1);
    num.current += 2;
  }
  return (
    <div>
      <button onClick={handelCount}>{no}</button>
      <div>{num.current}</div>
    </div>
  );
}
