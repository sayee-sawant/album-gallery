import "../CSS/DeleteAlbum.css";
// import { useState } from "react";
export default function DeleteAlbum({ dispatch, id }) {
  // const [deleteState, setdeleteState] = useState("");
  // function handelDeleteAlbum() {
  //   deleteAlbum();
  //   // console.log("dlt-------------------->", handelDeleteAlbumParent);
  //   // <div>dlt--------{deleteAlbum}</div>;
  //   // setdeleteState(de)
  // }
  return (
    <div>
      <button
        className="deleteAlbum"
        onClick={() => dispatch({ type: "deleteAlbum", payload: id })}
      >
        x
      </button>
    </div>
  );
}
