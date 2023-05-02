import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { fetchAlbum } from '../features/album/albumSlice';
import { fetchArtists } from '../features/artists/artistsSlice';
import { fetchUsers } from '../features/user/userSlice';

const PrivateRoutes = () => {
  const { access_token } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  /* Fetch all needed data */
  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchAlbum());
    dispatch(fetchArtists());
  }, [dispatch]);

  return access_token ? <Outlet /> : <Navigate to={'/login'} />;
};
export default PrivateRoutes;
