import { useSelector } from 'react-redux';

//Style
import './AlbumCard.css';

const AlbumCard = ({ album }) => {
  const { id, name, cover, artistId } = album;
  const { artists } = useSelector((state) => state.artist);

  const artistName = artists.artists.find((artist) => {
    return artist.id === artistId;
  });

  return (
    <>
      <div key={id} className="card">
        <img src={cover} alt="album cover" className="card-image-album"></img>
        <div>{artistName.name}</div>
        <div className="card-title">{name}</div>
      </div>
    </>
  );
};
export default AlbumCard;
