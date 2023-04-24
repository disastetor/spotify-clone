import ArtistCard from './ArtistCard';

const ArtistsList = (props) => {
  const { artists } = props.artists;
  return (
    <>
      <div className="songs">
        <>
          {artists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </>
      </div>
    </>
  );
};
export default ArtistsList;
