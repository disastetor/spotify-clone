import Login from './Login';

//Styles
import './Modal.css';

const Modal = () => {
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4 className="title">Login</h4>
        {/* =================
                BUTTONS
        ===================== */}
        <Login />
      </div>
    </aside>
  );
};
export default Modal;
