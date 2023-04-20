import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import fetchData from './test';
import { useEffect, useState } from 'react';
import Modal from './components/Modal';

//Pages & components
import Home from './pages/Home/Home';
import Favorite from './pages/Favorite/Favorite';
import Album from './pages/Album/Album';
import Artists from './pages/Artists/Artists';
import Sidebar from './components/Sidebar';
import Player from './components/Player';

//Styles
import './App.css';

function App() {
  const { isOpen } = useSelector((store) => store.modal);

  /*   useEffect(() => {
    fetchData();
  }, []); */

  return (
    <div className="App">
      <BrowserRouter>
        {isOpen && <Modal />}
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main">
          <div className="main-content">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/favorite" element={<Favorite />} />
              <Route path="/album" element={<Album />} />
              <Route path="/artists" element={<Artists />} />
            </Routes>
          </div>
          <footer className="player">
            <Player />
          </footer>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
