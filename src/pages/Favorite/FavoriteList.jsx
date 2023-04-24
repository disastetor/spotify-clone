import FavoriteCard from './FavoriteCard';

const FavoriteList = (props) => {
  const favorite = props.favorite;
  return (
    <>
      <div className="songs">
        <>
          {favorite.map((favorite) => (
            <FavoriteCard key={favorite.id} favorite={favorite} />
          ))}
        </>
      </div>
    </>
  );
};
export default FavoriteList;
