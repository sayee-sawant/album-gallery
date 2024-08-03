import { AlbumsDB } from "./components/AlbumsDB.js";
import AddNewAlbum from "./components/AddNewAlbum";
import { useContext, useReducer, useState } from "react";
import AllDataRender from "./components/AllDataRender.js";
import ThemeContext from "./Context/ThemeContext.jsx";
import "./App.css";
import UseRef from "./components/UseRef.jsx";
export default function App() {
  console.log("insid App.........");

  const themeContext = useContext(ThemeContext);
  // console.log("themecon------------>", themeContext);

  // function addAlbum(){

  // }
  // const [abums, setAllAlbums] = useState(AlbumsDB);
  const [editableAlbum, setEditableAlbum] = useState(null);

  function albumReducer(albums, action) {
    switch (action.type) {
      case "addMoreAlbum":
        return [...albums, { ...action.payload, id: albums.length + 1 }];
      case "deleteAlbum":
        return albums.filter((album) => {
          return album.id !== action.payload;
        });
      case "editAlbum":
        return albums.find((album) => album.id === action.id);
      case "updateAlbum":
        const index = albums.findIndex((alb) => alb.id === action.payload.id);
        // console.log("album.id=============>", album);
        // setAlbums(album);/
        const newUpdatedAlbums = [...albums];
        newUpdatedAlbums[index] = action.payload;
        setEditableAlbum(null);
        return newUpdatedAlbums;
      default:
        return albums;
    }
  }
  const [albums, dispatch] = useReducer(albumReducer, AlbumsDB);

  // const [albums, setAlbums] = useState(AlbumsDB);
  // function addMoreAlbum(album) {
  //   dispatch({ type: "addMoreAlbum", payload: album });
  //   // setAlbums([...albums, { ...album, id: albums.length + 1 }]);
  //   // console.log("in app album img ------------->", album.image);
  // }

  /****** delete album */

  // function deleteAlbum(id) {
  //   console.log("id------------>", id);
  //   dispatch({ type: "deleteAlbum", payload: id });
  //   // console.log("deletnig id===============> ", (arr)=>{arr.id});
  //   // albums.reduce((album)=>{album.id!=id})
  //   // console.log("delete pressed .......");
  //   // const otherThanDeleted = albums.filter((album) => album.id !== id
  //   // );
  //   // console.log("new al list ------------>", otherThanDeleted);
  //   // setAlbums(otherThanDeleted);
  // }

  function editAlbum(id) {
    console.log(
      "tobeEdited============>",
      // albums.find((album) => album.id === id);
      // dispatch({ type: "editAlbum", payload: id })
      setEditableAlbum(albums.find((album) => album.id === id))
    );
    // console.log("id of editAlbum --------------> ", id);
  }

  /***** update  */

  // function updateAlbum(album) {
  //   dispatch({ type: "updateAlbum", payload: album });
  //   // setAlbums(newUpdatedAlbums);
  //   // console.log("newUpdatedAlbums-------->", newUpdatedAlbums);
  // }

  // console.log("album data----------->", A/lbumsDB);
  // purple function
  // function handelPurple() {
  //   console.log("pur hitted!!!!!!!!!!!!!");
  // }
  const [themeChange, setThemeChange] = useState(themeContext);
  const [themeChangeLogo, setThemeChangeLogo] = useState("✼");
  function handelTheme() {
    console.log("handelTheme.........");
    if (themeChange === "dark") {
      setThemeChangeLogo("❋");
      setThemeChange("lightMode");
    } else {
      setThemeChange("dark");
      setThemeChangeLogo("✼");
    }
  }
  return (
    <ThemeContext.Provider value={themeChange}>
      {/* <UseRef /> */}
      <div className={themeChange}>
        <div className={`App ${themeChange}`}>
          <button className="theme" onClick={handelTheme}>
            {themeChangeLogo}
          </button>

          <div className="AppParent">
            <AddNewAlbum
              editableAlbum={editableAlbum}
              // add new album
              dispatch={dispatch}
              // updateAlbum={updateAlbum}
              // updateAlbum={updateAlbum}
            />

            {/* <DeleteAlbum /> */}
            <AllDataRender
              albums={albums}
              // delete
              dispatch={dispatch}
              editAlbum={editAlbum}
            />

            {/* {albums.map((arr) => (
        <Template
          key={arr.id}
          id={arr.id}
          image={arr.image}
          title={arr.title}
          description={arr.description}
          releaseDate={arr.releaseDate}
          noOfSongs={arr.noOfSongs}
          duration={arr.duration}
          // addToPlaylist={arr.addToPlaylist}
        />
      ))} */}

            {/* <PurpleHeart
        // msg="sayee"
        onClick2={() => console.log("purrrrrrrrrrr")}
      ></PurpleHeart> */}
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
