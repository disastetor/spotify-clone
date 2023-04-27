import { useSelector } from 'react-redux';
import FavoriteList from './FavoriteList';
import NotLogged from '../../components/NotLogged';

const Favorite = () => {
  const { favoriteSongs } = useSelector((state) => state.favorite);
  const { auth } = useSelector((state) => state.user);

  return (
    <>
      {auth ? (
        <>
          <h1>Preferiti</h1>
          {favoriteSongs.length < 1 ? (
            <p>There are no favorite songs yet :/</p>
          ) : (
            <FavoriteList favorite={favoriteSongs} />
          )}
        </>
      ) : (
        <>
          <NotLogged />
        </>
      )}
    </>
  );
};
export default Favorite;
