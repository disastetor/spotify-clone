import SongCard from '../../components/SongCard';

const FavoriteList = (props) => {
  const favorite = props.favorite;
  return (
    <>
      <div className="songs">
        <>
          {favorite.map((favorite) => (
            <SongCard key={favorite.id} song={favorite} />
          ))}
        </>
      </div>
    </>
  );
};
export default FavoriteList;
