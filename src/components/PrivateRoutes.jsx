import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
  const { access_token } = useSelector((state) => state.user);

  return access_token ? <Outlet /> : <Navigate to={'/login'} />;
};
export default PrivateRoutes;
