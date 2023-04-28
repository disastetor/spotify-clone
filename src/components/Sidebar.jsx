import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../features/modal/modalSlice';
import { logout, clearLocalStorage } from '../features/user/userSlice';
import { reset as resetSongs } from '../features/player/playerSlice';
import { reset as resetAlbum } from '../features/album/albumSlice';
import { reset as resetArtist } from '../features/artists/artistsSlice';

//Style
import './Sidebar.css';
import { FilledHeart } from '../assets/icons';
import AlbumIcon from '@mui/icons-material/Album';
import Person2Icon from '@mui/icons-material/Person2';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

const Sidebar = () => {
  const dispatch = useDispatch();
  const { access_token, users } = useSelector((state) => state.user);
  return (
    <>
      <div className="sidebar-content">
        {/*======================
                    PROFILE 
             ======================*/}
        <div className="profile">
          <div className=" propic" onClick={() => dispatch(openModal())}>
            <div className="image">
              <Person2Icon />
            </div>
          </div>
          <div className="username">
            {access_token && users.firstName + ' ' + users.lastName}
          </div>
        </div>

        {/*======================
                PAGE LINKS 
             ======================*/}
        <div className={'pages'}>
          {/*======================
                    HOME 
             ======================*/}
          <NavLink
            className="page"
            to="/"
            style={({ isActive }) => ({
              color: isActive ? 'plum' : 'aliceblue',
            })}
          >
            <div className="text">Home</div>
            <div className="icon">
              <HomeRoundedIcon fontSize="large" />
            </div>
          </NavLink>

          {/*======================
                    FAVORITE 
             ======================*/}
          <NavLink
            className="page"
            to="/favorite"
            style={({ isActive }) => ({
              color: isActive ? 'plum' : 'aliceblue',
            })}
          >
            <div className="text">Preferiti</div>
            <div className="icon">
              <FilledHeart />
            </div>
          </NavLink>

          {/*======================
                    ALBUM 
             ======================*/}
          <NavLink
            className="page"
            to="album"
            style={({ isActive }) => ({
              color: isActive ? 'plum' : 'aliceblue',
            })}
          >
            <div className="text">Album</div>
            <div className="icon">
              <AlbumIcon fontSize="large" />
            </div>
          </NavLink>

          {/*======================
                    ARTISTS 
             ======================*/}
          <NavLink
            className="page"
            to="artists"
            style={({ isActive }) => ({
              color: isActive ? 'plum' : 'aliceblue',
            })}
          >
            <div className="text">Artisti</div>
            <div className="icon">
              <Person2Icon fontSize="large" />
            </div>
          </NavLink>
        </div>

        {/* LOGOUT */}

        <div
          className="logout-div"
          onClick={() => {
            dispatch(clearLocalStorage());
            dispatch(logout());
            dispatch(resetAlbum());
            dispatch(resetArtist());
            dispatch(resetSongs());
          }}
        >
          <div className="logout-minidiv">
            <div className="logout">Logout</div>
            <div className="logout-icon">
              <LogoutRoundedIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
