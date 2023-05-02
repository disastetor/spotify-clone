import { NavLink } from 'react-router-dom';

//Styles
import './ArtistCard.css';

const ArtistCard = ({ artist }) => {
  const { id, name, avatar } = artist;
  return (
    <NavLink to={`/artists/${id}`}>
      <div key={id} className="artist-card">
        <div
          style={{ backgroundImage: `url(${avatar})` }}
          className="card-image-artist"
        ></div>

        <div className="artist-title">{name}</div>
      </div>
    </NavLink>
  );
};
export default ArtistCard;
