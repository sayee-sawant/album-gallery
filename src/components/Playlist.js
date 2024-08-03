import { useState } from "react";
import "../CSS/Playlist.css";
// import "./Playlist.css";
export default function Playlist() {
  //   console.log("insid  Playlist.........");
  const [add, setAdd] = useState(
    <button className="Playlist">Playlist</button>
  );

  const [addRev, setAddRev] = useState(true);
  //   let added = false;
  function handelAddToFav(e) {
    e.stopPropagation();
    // console.log("e------------>", e);
    // setAddRev(true);
    if (addRev) {
      setAdd(<button className="AddedToFav">Addde!!!!!!!</button>);
      console.log("added............");
    } else {
      setAdd(<button className="Playlist">Playlist</button>);
      console.log("wanna remove from fav?????");
    }
    setAddRev(!addRev);
    // onClick();
  }
  return (
    <div>
      <div className="AddToFavourite" onClick={handelAddToFav}>
        {add}
      </div>
      {/* <button className="AddToFavourite" onClick={handelAddToFav}>
        {add}
      </button> */}
    </div>
  );
}
