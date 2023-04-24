import React from 'react';
import AlbumCard from './AlbumCard';

//Style
import '../../components/SongList.css';

const AlbumList = (props) => {
  const { albums } = props.albums;

  return (
    <>
      <div className="songs">
        <>
          {albums.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </>
      </div>
    </>
  );
};

export default AlbumList;
