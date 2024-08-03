export default function PurpleHeart({ onClick2 }) {
  // return <button className="PurpleHeart">💜</button>;
  function handelPurple2() {
    onClick2();
    // console.log("inside handelPurple.......");
  }
  return (
    <div>
      <button onClick={handelPurple2} className="PurpleHeart">
        🖤
      </button>
      {/* <div>{msg}</div> */}
    </div>
  );
}
