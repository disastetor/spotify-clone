//Styles
import './ArtistCard.css';

const ArtistCard = ({ artist }) => {
  const { id, name, avatar } = artist;
  return (
    <>
      <div key={id} className="card">
        <img
          src={avatar}
          alt="album cover"
          className="card-image-album - artist"
        ></img>
        <div className="card-title">{name}</div>
      </div>
    </>
  );
};
export default ArtistCard;
