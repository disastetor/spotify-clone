import { useSelector } from 'react-redux';
import FavoriteList from './FavoriteList';

const Favorite = () => {
  const { favoriteSongs } = useSelector((state) => state.favorite);

  return (
    <>
      <h1>Preferiti</h1>
      {favoriteSongs.length < 1 ? (
        <p>Non hai nessuna canzone preferita? 😒</p>
      ) : (
        <FavoriteList favorite={favoriteSongs} />
      )}
    </>
  );
};
export default Favorite;
