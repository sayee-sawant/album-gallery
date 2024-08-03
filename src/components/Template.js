import "../CSS/Template.css";
import { useContext, useEffect, useState } from "react";
// import AddToFav from "./AddToFav";
import "../CSS/Playlist.css";
// import BTS from "../Images/BTS.jpg";
import DeleteAlbum from "./DeleteAlbum";
import EditAlbum from "./EditAlbum";
import Playlist from "./Playlist";
import ThemeContext from "../Context/ThemeContext";
// import TooCoolForSchool from "../Images/2Cool4School.jpg";
export default function Template({
  title,
  image,
  description,
  noOfSongs,
  duration,
  releaseDate,
  dispatch,
  id,
  editAlbum,
  // purpleHeartState,
  // addToPlaylist = "true",
}) {
  // const themeContext=useContext(ThemeContext);
  // console.log("insid  Template.........");
  const [purpleHeart, setPurpleHeart] = useState("🤍");
  const [state, setState] = useState(true);

  // let state = false;

  function isPurpleHeart(e) {
    // deleteAlbum();
    e.stopPropagation();
    if (state) {
      setPurpleHeart("💜");
      console.log("its purpleeeeeee");
    } else {
      setPurpleHeart("🤍");
      console.log("its 🤍 actualy!!!!!!!!!!");
    }
    setState(!state);
    // let state = true;
    // if (state === false) {
    //   setPurpleHeart("🖤");
    //   console.log("its 🖤 actualy!!!!!!!!!!");

    //   // state = false;
    // } else {
    //   // state = false;
    //   setPurpleHeart("💜");
    //   console.log("its purpleeeeeee");
    // }
    // state = !state;
    // state/ = true;
    // setPurpleHeart("🖤");
  }
  // function handelDeleteAlbumParent(id) {
  //   deleteAlbum(id);
  //   // console.log("deleteAlbum() in Template ------------>", deleteAlbum);
  // }
  const themeContext = useContext(ThemeContext);
  // console.log("inside Templete themeContext ---------> ", themeContext);
  // console.log("inside Templete id ---------> ", id);

  /********** ................ useEffect  ......................*/
  // // runs when code is renderd for the first time ,just after everything is rendered
  // //  and if there is some kind of change in dependency array
  // useEffect(
  //   () => {
  //     const idOfSetInterval = setInterval(() => {
  //       console.log("inside useEff----------id>", id);
  //     }, 3000);
  //     // clearing function
  //     return () => clearInterval(idOfSetInterval);
  //   },
  //   // dependency array
  //   [id]
  // );

  return (
    <div>
      {/* <div className={themeContext}> */}
      <div className={`template ${themeContext}`}>
        {/* <div>k-------{key}</div> */}
        {/* {
          console.log("key----------->",key);
        } */}
        {/* <div>k============{key}</div> */}
        {/* {" "} */}
        <div className="albumHeader">
          <div>
            <button className="purpleHeart" onClick={isPurpleHeart}>
              {purpleHeart}
            </button>
          </div>
          <div>
            <Playlist />
          </div>
          <EditAlbum editAlbum={editAlbum} id={id} />
          <DeleteAlbum dispatch={dispatch} id={id} />
        </div>
        {/* <div className="addToPlaylist">
          {addToPlaylist === "true" ? <div>{"✅"}</div> : <div>{"❎"}</div>}
        </div> */}
        <div></div>
        {/* <div className="purpleHeart">{purpleHeart}</div> */}
        <img className="album" src={image} alt="noooooooooooo imagee"></img>
        {/* <img className="cat" src="https://placekitten.com/640/360"></img> */}
        <div className="title">{title}</div>
        <div className="description">{description}</div>
        <div className="info">
          <div className="releaseDate">{releaseDate}</div>
          <div className="noOfSongs">{noOfSongs}</div>
          <div className="duration">{duration}</div>
        </div>
      </div>
    </div>
  );
}
