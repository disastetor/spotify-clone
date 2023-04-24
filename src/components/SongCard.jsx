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
        <div className="image-container">
          <img src={cover} alt="album cover" className="card-image"></img>
        </div>
        <div className="title-author-info">
          <div className="card-title">{name}</div>
          <div className="card-author">{authorName}</div>
        </div>
      </div>
    </>
  );
};
export default SongCard;
