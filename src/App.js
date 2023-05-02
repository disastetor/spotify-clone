import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Modal from './components/Modal';
import ArtistsList from './pages/Artists/ArtistsList';
import ArtistPage from './pages/Artists/ArtistPage';

//Pages & components
import Home from './pages/Home/Home';
import Favorite from './pages/Favorite/Favorite';
import Album from './pages/Album/Album';
import Artists from './pages/Artists/Artists';
import Login from './pages/Login/NotLogged';
import PrivateRoutes from './components/PrivateRoutes';

//Styles
import './App.css';
import GeneralLayout from './components/GeneralLayout';

function App() {
  const { isOpen } = useSelector((store) => store.modal);
  return (
    <div className="App">
      <BrowserRouter>
        {isOpen && <Modal />}
        <Routes>
          <Route path="/test" element={<Favorite />} />
          <Route
            element={
              <GeneralLayout>
                <PrivateRoutes />
              </GeneralLayout>
            }
          >
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
      </BrowserRouter>
    </div>
  );
}

export default App;
