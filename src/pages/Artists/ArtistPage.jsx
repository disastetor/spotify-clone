import { useParams } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';
import SongCard from '../../components/SongCard';
import AlbumCard from '../Album/AlbumCard';

const ArtistPage = () => {
  const { artists, songs, albums } = useOutletContext();

  //Take the id of the artist from the url
  const { artistId } = useParams();

  //Find current artist info
  const artistData = artists.artists.artists.find((artist) => {
    return artist.id === artistId;
  });
  //   console.log(artistData);

  //Find current artist songs
  const artistSongs = songs.songs.songs.filter((song) => {
    return song.authorId === artistId;
  });
  //   console.log(artistSongs);

  //Find current artist albums
  const artistAlbum = albums.albums.albums.filter((album) => {
    return album.artistId === artistId;
  });

  return (
    <>
      <div className="artist-title">
        <h1>{artistData.name}</h1>
      </div>

      <h3 style={{ textAlign: 'left' }}>Canzoni</h3>
      <div className="songs">
        {artistSongs.slice(0, 8).map((song, index) => (
          <SongCard key={song.id} song={song} index={index} />
        ))}
      </div>

      <h3 style={{ textAlign: 'left' }}>Album</h3>
      <div className="songs">
        {artistAlbum.map((album) => (
          <AlbumCard key={album.id} album={album} />
        ))}
      </div>
    </>
  );
};
export default ArtistPage;
