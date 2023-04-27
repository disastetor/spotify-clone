import LoginButton from './LoginButton';

const NotLogged = () => {
  return (
    <>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <h1>Non sei loggato</h1>
        <br />
        <LoginButton />
      </div>
    </>
  );
};
export default NotLogged;
