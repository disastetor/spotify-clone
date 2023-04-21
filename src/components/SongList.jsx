import SongCard from './SongCard';

//Style
import './SongList.css';

const SongList = (props) => {
  const { songs } = props;
  return (
    <>
      <div className="songs">
        {songs.map((song, index) => (
          <SongCard song={song} index={index} />
        ))}
      </div>
    </>
  );
};
export default SongList;
