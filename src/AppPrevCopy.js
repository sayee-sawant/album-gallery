// import Template from "./components/Template";
// import AddToFav from "./components/AddToFav";
// import Temp2 from "./components/Temp2";
// import TooCoolForSchool from "./Images/2Cool4School.jpg";
// import SkoolLuvAffair from "./Images/Skool Luv Affair.jpg";
// import PlayButton from "./components/PlayButton";
// //
// import BTS from "./Images/BTS.jpg";
// import RM from "./Images/RM.jpg";
// import JIN from "./Images/JIN.jpg";
// import SUGA from "./Images/SUGA.jpg";
// import JHOPE from "./Images/JHOPE.jpg";
// import JIMIN from "./Images/JIMIN.jpg";
// import V from "./Images/V.jpg";
// import JK from "./Images/JK.jpg";
// import schoolluvafair from "./Images/Skool Luv Affair.jpg";
// import Toocoolforskool from "./Images/2Cool4School.jpg";
// import DarkAndWild from "./Images/DarkAndWild.jpg";
// import YoungForever from "./Images/YoungForever.jpg";
// import Wings from "./Images/Wings.jpg";
// import YouNeverWalkAlone from "./Images/YouNeverWalkAlone.jpg";
// import LoveYourself from "./Images/LoveYourself.jpg";
// import MapOfSoul from "./Images/MapOfSoul.jpg";
import { AlbumsDB } from "./components/AlbumsDB.js";
import AddNewAlbum from "./components/AddNewAlbum";
import { useState } from "react";
import AllDataRender from "./components/AllDataRender.js";
// import DeleteAlbum from "./components/DeleteAlbum.js";
// import Counter from "./components/Counter";
// import PurpleHeart from "./components/PurpleHeart";
// import "./GridDemo.css";
// import BTS from "./Images/BTS.jpg";
// export default function GridDemo() {

//

export default function App() {
  console.log("insid App.........");

  // function addAlbum(){

  // }
  // const [abums, setAllAlbums] = useState(AlbumsDB);
  const [albums, setAlbums] = useState(AlbumsDB);
  const [editableAlbum, setEditableAlbum] = useState(null);
  function addMoreAlbum(album) {
    setAlbums([...albums, { ...album, id: albums.length + 1 }]);
    console.log("in app album img ------------->", album.image);
  }

  function deleteAlbum(id) {
    console.log("id------------>", id);
    // console.log("deletnig id===============> ", (arr)=>{arr.id});
    // albums.reduce((album)=>{album.id!=id})
    // console.log("delete pressed .......");
    const otherThanDeleted = albums.filter((album) => {
      return album.id !== id;
    });
    // console.log("new al list ------------>", otherThanDeleted);
    setAlbums(otherThanDeleted);
  }
  function editAlbum(id) {
    console.log(
      "tobeEdited============>",
      // albums.find((album) => album.id === id);
      setEditableAlbum(albums.find((album) => album.id === id))
    );
    // console.log("id of editAlbum --------------> ", id);
  }
  function updateAlbum(album) {
    const index = albums.findIndex((alb) => alb.id === album.id);
    console.log("album.id=============>", album);
    // setAlbums(album);/
    const newUpdatedAlbums = [...albums];
    newUpdatedAlbums[index] = album;
    setAlbums(newUpdatedAlbums);
    console.log("newUpdatedAlbums-------->", newUpdatedAlbums);
  }

  // console.log("album data----------->", A/lbumsDB);
  // purple function
  // function handelPurple() {
  //   console.log("pur hitted!!!!!!!!!!!!!");
  // }
  // console.log("img---------->", TooCoolForSchool);
  return (
    <div>
      {/* <img className="album" src={TooCoolForSchool} alt="noooooooooooo"></img> */}
      {/* {cardInfo.map((arr, index) => 
          <Template
             title:{arr.title}; 

      />



      
      )} */}
      {/* // title="2Cool4School" // image={TooCoolForSchool}
      // description="Hip hop group BTS releases debut single 2 COOL 4 SKOOL //
      BTS debut track “No More Dream”! // A fresh new take on 90s hip hop! // A
      new, bold message from hip hop boyband BTS!" // noOfSongs="7 songs" //
      duration="20 min 49 sec" // releaseDate=" June 12, 2013" */}
      {/* 2 */}
      {/* <Counter /> */}
      <AddNewAlbum
        editableAlbum={editableAlbum}
        addMoreAlbum={addMoreAlbum}
        updateAlbum={updateAlbum}
        // updateAlbum={updateAlbum}
      />

      {/* <DeleteAlbum /> */}
      <AllDataRender
        albums={albums}
        deleteAlbum={deleteAlbum}
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

      {/* <AddToFav onClick={() => console.log("AddToFav..............")} /> */}
      {/* <PlayButton
        onClick2={() => {
          console.log("PlayButton");
        }}
      /> */}
      {/* // title="Skool Luv Affair"
        // image={schoolluvafair}
        // description="Hip hop group BTS releases debut single 2 COOL 4 SKOOL
        // BTS debut track “No More Dream”!
        // A fresh new take on 90s hip hop!
        // A new, bold message from hip hop boyband BTS!"
        // noOfSongs="7 songs"
        // duration="20 min 49 sec"
        // releaseDate="	June 12, 2013"
        // purpleHeartState={true}
        // addToPlaylist={false} */}
      {/*  */}
      {/* <Temp2 title2="title2222222222222222" /> */}
      {/* <Template
        title="Skool Luv Affair"
        image={schoolluvafair}
        description="Hip hop group BTS releases debut single 2 COOL 4 SKOOL
        BTS debut track “No More Dream”!
        A fresh new take on 90s hip hop!
        A new, bold message from hip hop boyband BTS!"
        noOfSongs="7 songs"
        duration="20 min 49 sec"
        releaseDate="	June 12, 2013"
        purpleHeartState={false}
        addToPlaylist={true}
      /> */}
      {/*  */}
      {/* <Template />
      <Template />
      <Template />
      <Template /> */}
    </div>
  );
}
