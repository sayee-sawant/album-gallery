import { useEffect, useState } from "react";
import "../CSS/AddNewAlbum.css";
// import ThemeContext from "../Context/ThemeContext";
// import BTS from "../Images/BTS.jpg";
// import { AlbumsDB } from "./AlbumsDB";
export default function AddNewAlbum({ dispatch, editableAlbum }) {
  console.log("insode  AddNewAlbum() ");
  // const [album, setAlbums] = useState(AlbumsDB);
  const [newAlbum, setNewAlbum] = useState({
    image: "",
    title: "",
    description: "",
    duration: "",
    addToPlaylist: "",
    releaseDate: "",
    noOfSongs: "",
    /*
    image: "",
  title: "",
  description: "",
  duration: "",
  addToPlaylist: "", // Initialize with a default value
  releaseDate: "",
  noOfSongs: "",*/
  });

  function handelInputs(e) {
    setNewAlbum({
      ...newAlbum,
      // id: album.length + 1,
      [e.target.name]: e.target.value,
    });
    // setAlbumTitle(...album,{[e.target.name]:e.target.value});
    // console.log(e.target.name, " e...........", e.target.value);
  }
  function handeSubmit(e) {
    e.preventDefault();
    if (editableAlbum) {
      dispatch({ type: "updateAlbum", payload: newAlbum });
    } else {
      dispatch({ type: "addMoreAlbum", payload: newAlbum });
    }
    // validating if all inputs contaning values or not
    if (
      // newAlbum.image === "" ||
      newAlbum.title === "" ||
      newAlbum.description === "" ||
      newAlbum.duration === "" ||
      newAlbum.releaseDate === "" ||
      newAlbum.noOfSongs === ""
    ) {
      alert("soorry no empty val is allowded");
    }
    setNewAlbum({
      image: "",
      title: "",
      description: "",
      duration: "",
      addToPlaylist: "",
      noOfSongs: "",
      releaseDate: "",
    });
    // setAlbums(addAlbum(album));
    // setAlbums(album);
    // console.log("handelTitle ...........", newAlbum);
    // console.log("e...........", e);
    // console.log("handeSubmit.");
  }
  useEffect(() => {
    console.log("inside AddNewAlbum  useEffect *******");
    // console.log("inside AddNewAlbum  newAl ==========", editableAlbum);
    if (editableAlbum) {
      setNewAlbum(editableAlbum);
    }
  }, [editableAlbum]);

  // /********* context */
  // const themeContext = use/ewAlbum  themeContext ........", themeContext);
  return (
    /*
     {
    id: 1,
    image: Toocoolforskool,
    title: "2 Cool 4 School",
    description:
      "check out first ever album of biggest boy band in the world the BTS .No matter what they are 7 best people in the world",

    button: "favourite",
    releaseDate: "	June 12, 2013",
    noOfSongs: "7 songs",
    duration: "20 min 49 sec",
    addToPlaylist: "false",
  },*/
    <form className="formEle">
      <input
        className="image"
        name="image"
        placeholder="image"
        onChange={handelInputs}
        value={newAlbum.image}
      ></input>
      {/* <div>img--------- {album.image}</div> */}
      <input
        className="albumTitle"
        name="title"
        placeholder="enter title"
        onChange={handelInputs}
        value={newAlbum.title}
      ></input>
      {/* <div> title-------- {album.title}</div> */}
      <input
        className="description"
        name="description"
        placeholder="description"
        onChange={handelInputs}
        value={newAlbum.description}
      ></input>
      {/* release date */}
      <input
        className="releaseDate"
        name="releaseDate"
        placeholder="releaseDate"
        onChange={handelInputs}
        value={newAlbum.releaseDate}
      ></input>
      {/* noo. of songs */}
      <input
        className="nOfSongs"
        name="noOfSongs"
        placeholder="noOfSongs"
        onChange={handelInputs}
        value={newAlbum.noOfSongs}
      ></input>
      {/*  */}
      <input
        className="duration"
        name="duration"
        placeholder="duration"
        onChange={handelInputs}
        value={newAlbum.duration}
      ></input>
      {/* <input
        className="addToPlaylist"
        name="addToPlaylist"
        placeholder="addToPlaylist"
        onChange={handelInputs}
        value={newAlbum.addToPlaylist}
      ></input> */}
      <button className="add" onClick={handeSubmit}>
        {editableAlbum ? "EDIT" : " AddNewAlbum"}
      </button>
    </form>
  );
}
