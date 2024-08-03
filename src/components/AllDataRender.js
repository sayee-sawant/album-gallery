// import AddNewAlbum from "./AddNewAlbum";
import Template from "./Template";
import "../App.css";
import "../CSS/AllDataRender.css";
export default function AllDataRender({ albums, dispatch, editAlbum }) {
  return (
    <div className="TempleteRender">
      {albums.map((arr) => (
        <Template
          key={arr.id}
          id={arr.id}
          image={arr.image}
          title={arr.title}
          description={arr.description}
          releaseDate={arr.releaseDate}
          noOfSongs={arr.noOfSongs}
          duration={arr.duration}
          dispatch={dispatch}
          editAlbum={editAlbum}
          // addToPlaylist={arr.addToPlaylist}
        />
      ))}
    </div>
  );
}
// {albums.map((arr) => (
//     <Template
//       key={arr.id}
//       id={arr.id}
//       image={arr.image}
//       title={arr.title}
//       description={arr.description}
//       releaseDate={arr.releaseDate}
//       noOfSongs={arr.noOfSongs}
//       duration={arr.duration}
//       // addToPlaylist={arr.addToPlaylist}
//     />
//   ))}
