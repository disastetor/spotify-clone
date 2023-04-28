import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Modal from './components/Modal';
import ArtistsList from './pages/Artists/ArtistsList';
import ArtistPage from './pages/Artists/ArtistPage';

//Pages & components
import Home from './pages/Home/Home';
import Favorite from './pages/Favorite/Favorite';
import Album from './pages/Album/Album';
import Artists from './pages/Artists/Artists';
import Sidebar from './components/Sidebar';
import Player from './components/Player';

//Styles
import './App.css';
import NotLogged from './components/NotLogged';

function App() {
  const { isOpen } = useSelector((store) => store.modal);
  const { auth } = useSelector((state) => state.user);

  return (
    <div className="App">
      <BrowserRouter>
        {isOpen && <Modal />}
        {auth ? (
          <>
            <div className="sidebar">
              <Sidebar />
            </div>
            <div className="main">
              <div className="main-content">
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route path="/favorite" element={<Favorite />} />
                  <Route path="/album" element={<Album />} />
                  <Route path="/artists" element={<Artists />}>
                    <Route index element={<ArtistsList />} />
                    <Route path=":artistId" element={<ArtistPage />} />
                  </Route>
                </Routes>
              </div>
              <footer className="player">
                <Player />
              </footer>
            </div>
          </>
        ) : (
          <>
            <NotLogged />
          </>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
