import SongList from '../../components/SongList';
import useFetchSongs from '../../hooks/useFetchSongs';
import './Home.css';

const Home = () => {
  const { data, loading } = useFetchSongs();

  return (
    <>
      <div className="song-container">
        <h1 className="title home-title">Home</h1>

        {!loading && <SongList songs={data.songs} />}
      </div>
    </>
  );
};

export default Home;
