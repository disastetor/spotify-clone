import Slider from './Slider';
import { useDispatch, useSelector } from 'react-redux';
import {
  nextSong,
  previousSong,
  shuffle,
} from '../features/player/playerSlice';
import { setFavorite } from '../features/favorite/favoriteSlice';

//Styles
import './Player.css';
import {
  EmptyHeart,
  /* VolumeActive,
  ShuffleIcon,
  PlayButton,
  BackwardButton,
  ForwardButton,
  RepeatIcon, */
  FilledHeart,
} from '../assets/icons';
import VolumeSlider from './VolumeSlider';

const Player = () => {
  /* Player values */
  const { currentSong, currentSongId, songs, shuffleActive } = useSelector(
    (state) => state.player
  );

  /* Favorite values */
  const { favoriteSongs } = useSelector((state) => state.favorite);

  const dispatch = useDispatch();

  //Check if the current playing song is contained in the favorite list
  const isFavorite = favoriteSongs.find((song) => {
    if (song.id === currentSongId) {
      return true;
    } else return false;
  });

  const handleLike = () => {
    const found = songs.songs.find((song) => song.id === currentSongId);
    dispatch(setFavorite(found));
  };

  return (
    <div className="player-container">
      <div className="progress-bar">
        <div className="slider">
          {/* #TODO PROGRESS BAR */}
          <span className="slider-span">00:00</span>
          <Slider />
          <span className="slider-span">03:00</span>
        </div>
      </div>
      <div className="player-secondary-container">
        {/*======================
                  LIKE BUTTON 
             ======================*/}
        <div
          onClick={() => handleLike()}
          className="lateral-mini-button-hearth"
          id="heart"
        >
          {isFavorite ? <FilledHeart /> : <EmptyHeart />}
        </div>
        {/*======================
                  SONG TITLE 
             ======================*/}
        <div className="song-title">{currentSong}</div>
        {/*======================
                  AUDIO CONTROLS 
             ======================*/}
        <div className="control-panel">
          <div className="svg-container" onClick={() => dispatch(shuffle())}>
            {shuffleActive ? <div>ON</div> : <div>OFF</div>}
          </div>
          <div
            className="svg-container"
            onClick={() => dispatch(previousSong(songs))}
          >
            BW
          </div>
          <div className="svg-container">P</div>
          <div
            className="svg-container"
            onClick={() => dispatch(nextSong(songs))}
          >
            FW
          </div>
          <div className="svg-container">REP</div>
        </div>
        {/*======================
                  AUTHOR/ALBUM 
             ======================*/}
        <div className="author-album">Ji ai Jo, Blockbuster</div>
        {/*======================
                  VOLUME BUTTON 
             ======================*/}
        <div className=" lateral-mini-buttons" id="volume">
          <VolumeSlider />
        </div>{' '}
      </div>
    </div>
  );
};
export default Player;
