import SongList from '../../components/SongList';
import { fetchSong } from '../../features/player/playerSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

//Styles
import './Home.css';

const Home = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.player);

  useEffect(() => {
    dispatch(fetchSong());
  }, [dispatch]);

  return (
    <>
      {/* Display loading while data is loading */}
      {songs.loading && <div>Loading...</div>}
      {/* After loading check if there is an error, if so display it */}
      {!songs.loading && songs.error ? <div>Error: {songs.error}</div> : null}
      {!songs.loading && songs?.songs?.songs?.length ? (
        <>
          <div className="song-container">
            <h1 className="title home-title">Home</h1>

            {<SongList songs={songs.songs} />}
          </div>
        </>
      ) : null}
    </>
  );
};

export default Home;
