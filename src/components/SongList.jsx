import SongCard from './SongCard';

//Style
import './SongList.css';

const SongList = (props) => {
  const { songs } = props;

  return (
    <>
      <div className="songs">
        <>
          {songs.songs.map((song, index) => (
            <SongCard key={song.id} song={song} index={index} />
          ))}
        </>
      </div>
    </>
  );
};
export default SongList;
