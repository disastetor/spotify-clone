import { closeModal } from '../features/modal/modalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { login, loginUser, fetchUsers } from '../features/user/userSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const [success, setSuccess] = useState(false);

  const { firstName, lastName, auth, loadingLogin, found, error } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const handleSubmit = async (e) => {
    if (email === 'easteregg@gmail.com' && password === '12345') {
      e.preventDefault();
      setEmail('');
      setPassword('');
      window.open(
        'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley',
        '_blank'
      );
    } else {
      e.preventDefault();
      dispatch(loginUser({ email, password }));
    }
  };
  return (
    <>
      {success ? (
        <section>
          <h1>Sei loggato!</h1>
          <br />
          <button
            className="btn clear-btn"
            onClick={() => {
              dispatch(closeModal());
              setEmail('');
              setPassword('');
            }}
          >
            Chiudi
          </button>
        </section>
      ) : (
        <>
          <form onSubmit={handleSubmit} className="form">
            <div className="input-container">
              <label className="label">Email:</label>
              <input
                required
                className="input-field"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <label className="label">Password:</label>
              <input
                className="input-field"
                required
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            {/* =================
              BUTTONS
      ===================== */}
            <div className="btn-container">
              <input type="submit" className="btn confirm-btn" value="login" />

              <button
                className="btn clear-btn"
                onClick={() => {
                  dispatch(closeModal());
                  setEmail('');
                  setPassword('');
                }}
              >
                Chiudi
              </button>
            </div>
          </form>
          {isError && <p>{error}</p>}
        </>
      )}
    </>
  );
};
export default Login;
