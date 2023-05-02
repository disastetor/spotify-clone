import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchArtists } from '../../features/artists/artistsSlice';
import { Outlet } from 'react-router-dom';
import { fetchAlbum } from '../../features/album/albumSlice';
import { fetchSong } from '../../features/player/playerSlice';

const Artists = () => {
  const dispatch = useDispatch();
  const artists = useSelector((state) => state.artist);
  const songs = useSelector((state) => state.player);
  const albums = useSelector((state) => state.album);
  const { auth } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchArtists());
  }, [dispatch, auth]);

  //Load song array
  useEffect(() => {
    dispatch(fetchSong());
  }, [dispatch, auth]);

  //Load album array
  useEffect(() => {
    dispatch(fetchAlbum());
  }, [dispatch, auth]);

  return (
    <>
      {/* Display loading while data is loading */}
      {(artists.loading || songs.loading || albums.loading) && (
        <div>Loading...</div>
      )}
      {/* After loading check if there is an error, if so display it */}
      {(!artists.loading && artists.error) ||
      (!songs.loading && songs.error) ||
      (!albums.loading && albums.error) ? (
        <div>
          Error: {artists.error} {songs.error}
          {albums.error}
        </div>
      ) : null}
      {!artists.loading &&
      artists?.artists?.artists?.length &&
      !songs.loading &&
      songs?.songs?.songs?.length &&
      !albums.loading &&
      albums?.albums?.albums?.length ? (
        <div className="song-container">
          {<Outlet context={{ artists, songs, albums }} />}
        </div>
      ) : null}
    </>
  );
};
export default Artists;
