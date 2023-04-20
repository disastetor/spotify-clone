import useFetchSongs from '../../hooks/useFetchSongs';

const Home = () => {
  const { data, loading } = useFetchSongs();

  console.log(data, loading);
  return (
    <>
      <h1>Home</h1>
      <div className="song-container"></div>
    </>
  );
};
export default Home;
