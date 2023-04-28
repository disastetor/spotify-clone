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
import Login from './pages/Login/NotLogged';
import PrivateRoutes from './components/PrivateRoutes';

//Styles
import './App.css';

function App() {
  const { isOpen } = useSelector((store) => store.modal);
  const { access_token } = useSelector((state) => state.user);

  return (
    <div className="App">
      <BrowserRouter>
        {isOpen && <Modal />}

        <>
          {access_token && (
            <div className="sidebar">
              <Sidebar />
            </div>
          )}

          <div className="main">
            <div className="main-content">
              <Routes>
                <Route path="/test" element={<Favorite />} />
                <Route element={<PrivateRoutes />}>
                  <Route exact path="/" element={<Home />} />
                  <Route path="/favorite" element={<Favorite />} />
                  <Route path="/album" element={<Album />} />
                  <Route path="/artists" element={<Artists />}>
                    <Route index element={<ArtistsList />} />
                    <Route path=":artistId" element={<ArtistPage />} />
                  </Route>
                </Route>
                <Route path="/login" element={<Login />} />
              </Routes>
            </div>
            {access_token && (
              <footer className="player">
                <Player />
              </footer>
            )}
          </div>
        </>
      </BrowserRouter>
    </div>
  );
}

export default App;
