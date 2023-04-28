import { useDispatch, useSelector } from 'react-redux';
import { increaseDuration, play } from '../features/player/playerSlice';

//Style
import './SongCard.css';

const SongCard = ({ song, index }) => {
  const dispatch = useDispatch();
  const { id, name, authorId, albumId, cover, authorName } = song;
  const { isPlaying } = useSelector((state) => state.player);
  const handleClick = (name, index) => {
    dispatch(play({ name, index, id, authorId, albumId, authorName, cover }));
    if (!isPlaying) {
      autoPlay();
    }
  };

  const autoPlay = () => {
    setInterval(() => {
      dispatch(increaseDuration());
    }, 1000);
  };
  return (
    <>
      <div
        onClick={() => handleClick(name, index, id, authorId, albumId, albumId)}
        key={id}
        className="card"
      >
        <img src={cover} alt="album cover" className="card-image-album"></img>
        <div className="card-author">{name}</div>
        <div className="card-title">{authorName}</div>
      </div>
    </>
  );
};
export default SongCard;
