import { fetchAlbum } from '../../features/album/albumSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import AlbumList from './AlbumList';

//Style
import '../Home/Home.css';

const Album = () => {
  const dispatch = useDispatch();
  const albums = useSelector((state) => state.album);
  const { auth } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchAlbum());
  }, [dispatch, auth]);

  return (
    <>
      {/* Display loading while data is loading */}
      {albums.loading && <div>Loading...</div>}
      {/* After loading check if there is an error, if so display it */}
      {!albums.loading && albums.error ? (
        <div>Error: {albums.error}</div>
      ) : null}
      {!albums.loading && albums.albums.length > 0 ? (
        <>
          <div className="song-container">
            <h1 className="title home-title">Albums</h1>

            {<AlbumList albums={albums.albums} />}
          </div>
        </>
      ) : null}
    </>
  );
};
export default Album;
