export default function EditAlbum({ editAlbum, id }) {
  //   function handelEditAlbum() {
  //     console.log("handelEditAlbum........");
  //   }
  //   <DeleteAlbum de/leteAlbum={deleteAlbum} id={id} />
  return (
    <div>
      <button className="Playlist" onClick={() => editAlbum(id)}>
        EditAlbum
      </button>
    </div>
  );
}
