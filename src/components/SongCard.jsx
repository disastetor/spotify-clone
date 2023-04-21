//Style
import './SongCard.css';

const SongCard = (props) => {
  const { id, name, authorName, authorId, albumId, cover } = props.song;
  const { index } = props.index;
  return (
    <>
      <div key={id} className="card">
        <img src={cover} className="card-image"></img>
        <div className="card-title">{name}</div>
        <div className="card-author">{authorName}</div>
      </div>
    </>
  );
};
export default SongCard;
