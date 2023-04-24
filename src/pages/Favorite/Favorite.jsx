import { useSelector } from 'react-redux';

const Favorite = () => {
  const { favoriteSongs } = useSelector((state) => state.favorite);
  console.log(favoriteSongs);
  return (
    <div>
      <h1>Favorite</h1>
      {favoriteSongs.length < 1 ? (
        <p>There are no favorite songs :/</p>
      ) : (
        <p>canzoniii</p>
      )}
    </div>
  );
};
export default Favorite;
