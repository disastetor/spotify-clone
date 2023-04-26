import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchArtists } from '../../features/artists/artistsSlice';
import ArtistsList from './ArtistsList';

const Artists = () => {
  const dispatch = useDispatch();
  const artists = useSelector((state) => state.artist);

  useEffect(() => {
    dispatch(fetchArtists());
  }, [dispatch]);

  console.log(artists);

  return (
    <>
      {/* Display loading while data is loading */}
      {artists.loading && <div>Loading...</div>}
      {/* After loading check if there is an error, if so display it */}
      {!artists.loading && artists.error ? (
        <div>Error: {artists.error}</div>
      ) : null}
      {!artists.loading && artists?.artists?.artists?.length ? (
        <>
          <div className="song-container">
            <h1 className="title home-title">Artisti</h1>

            {<ArtistsList artists={artists.artists} />}
          </div>
        </>
      ) : null}
    </>
  );
};
export default Artists;
