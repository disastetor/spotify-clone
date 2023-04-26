import ArtistCard from './ArtistCard';
import { useOutletContext } from 'react-router-dom';
const ArtistsList = () => {
  const { artists } = useOutletContext();
  console.log(artists);
  return (
    <>
      <h1 className="title home-title">Artisti</h1>
      <div className="songs">
        <>
          {artists.artists.artists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </>
      </div>
    </>
  );
};
export default ArtistsList;
