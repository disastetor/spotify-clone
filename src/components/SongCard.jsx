import { useDispatch } from 'react-redux';
import { play } from '../features/player/playerSlice';

//Style
import './SongCard.css';

const SongCard = ({ song, index }) => {
  const dispatch = useDispatch();
  const { id, name, authorId, albumId, cover, authorName } = song;

  const handleClick = (name, index) => {
    dispatch(play({ name, index, id, authorId, albumId, authorName }));
  };

  return (
    <>
      <div
        onClick={() => handleClick(name, index, id, authorId, albumId, albumId)}
        key={id}
        className="card"
      >
        <img src={cover} alt="album cover" className="card-image"></img>
        <div className="card-title">{name}</div>
        <div className="card-author">{authorName}</div>
      </div>
    </>
  );
};
export default SongCard;
