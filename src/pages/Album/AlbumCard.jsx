//Style
import './AlbumCard.css';

const AlbumCard = ({ album }) => {
  const { id, name, cover } = album;
  return (
    <>
      <div key={id} className="card">
        <img src={cover} alt="album cover" className="card-image-album"></img>
        <div className="card-title">{name}</div>
      </div>
    </>
  );
};
export default AlbumCard;
