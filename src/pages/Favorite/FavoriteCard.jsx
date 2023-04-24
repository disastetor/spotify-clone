const FavoriteCard = ({ favorite }) => {
  const { id, name, authorId, albumId, cover, authorName } = favorite;

  return (
    <>
      <div key={id} className="card">
        <img src={cover} alt="album cover" className="card-image-album"></img>
        <div className="card-title">{name}</div>
      </div>
    </>
  );
};
export default FavoriteCard;
