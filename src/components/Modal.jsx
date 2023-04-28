import Login from '../pages/Login/Login';

//Styles
import './Modal.css';

const Modal = () => {
  return (
    <aside className="modal-container">
      <div className="modal">
        {/* =================
                BUTTONS
        ===================== */}
        <Login />
      </div>
    </aside>
  );
};
export default Modal;
