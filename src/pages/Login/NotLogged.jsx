import { Navigate } from 'react-router-dom';
import LoginButton from './LoginButton';
import { useSelector } from 'react-redux';

const NotLogged = () => {
  const { access_token } = useSelector((state) => state.user);
  console.log(access_token);
  return access_token ? (
    <Navigate to="/" />
  ) : (
    <>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <h1>Effettua il login</h1>
        <br />
        <LoginButton />
      </div>
    </>
  );
};
export default NotLogged;
