import Player from './Player';
import Sidebar from './Sidebar';

const GeneralLayout = ({ children }) => {
  return (
    <>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main">
        <div className="main-content">{children}</div>
        <footer className="player">
          <Player />
        </footer>
      </div>
    </>
  );
};
export default GeneralLayout;
