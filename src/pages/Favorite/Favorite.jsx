import { useSelector } from 'react-redux';
import FavoriteList from './FavoriteList';

const Favorite = () => {
  const { favoriteSongs } = useSelector((state) => state.favorite);

  return (
    <div>
      <h1>Favorite</h1>
      {favoriteSongs.length < 1 ? (
        <p>There are no favorite songs yet :/</p>
      ) : (
        <FavoriteList favorite={favoriteSongs} />
      )}
    </div>
  );
};
export default Favorite;
