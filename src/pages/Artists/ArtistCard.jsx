import { NavLink } from 'react-router-dom';

//Styles
import './ArtistCard.css';

const ArtistCard = ({ artist }) => {
  const { id, name, avatar } = artist;
  return (
    <>
      <NavLink to={`/artists/${id}`}>
        <div key={id} className="artist-card">
          <img
            src={avatar}
            alt="album cover"
            className="card-image-artist"
          ></img>
          <div className="card-title">{name}</div>
        </div>
      </NavLink>
    </>
  );
};
export default ArtistCard;
