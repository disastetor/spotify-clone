import Player from './Player';
import Sidebar from './Sidebar';

const GeneralLayout = () => {
  return (
    <div className="main">
      <div className="main-content">
        <Sidebar />
        <Player />
      </div>
    </div>
  );
};
export default GeneralLayout;
