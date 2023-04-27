import { openModal } from '../features/modal/modalSlice';
import { useDispatch } from 'react-redux';

//Style
import './LoginButton.css';

const LoginButton = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="button-container" onClick={() => dispatch(openModal())}>
        <span>Login</span>
      </div>
    </>
  );
};
export default LoginButton;
