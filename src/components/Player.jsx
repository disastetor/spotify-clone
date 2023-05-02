import Slider from './Slider';
import { useDispatch, useSelector } from 'react-redux';
import {
  nextSong,
  previousSong,
  shuffle,
  repeat,
  handlePlay,
} from '../features/player/playerSlice';
import { setFavorite } from '../features/favorite/favoriteSlice';
import { increaseDuration } from '../features/player/playerSlice';

//Styles
import './Player.css';
import {
  EmptyHeart,
  ShuffleIcon,
  PlayButton,
  BackwardButton,
  ForwardButton,
  RepeatIcon,
  FilledHeart,
  PauseIcon,
} from '../assets/icons';
import VolumeSlider from './VolumeSlider';
import { useEffect } from 'react';

const Player = () => {
  /* Player values */
  const {
    currentSong,
    currentSongId,
    currentSongAuthor,
    songs,
    shuffleActive,
    cover,
    repeatActive,
    isPlaying,
    duration,
    songDuration,
  } = useSelector((state) => state.player);

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

  if (songDuration === duration) {
    dispatch(nextSong(songs));
  }

  useEffect(() => {
    if (isPlaying) {
      const autoPlay = setInterval(() => {
        dispatch(increaseDuration());
      }, 1000);
      return () => {
        clearInterval(autoPlay);
      };
    }
  }, [isPlaying, duration, dispatch]);

  return (
    <div className="player-container">
      <div className="progress-bar">
        <div className="album-image">
          {cover ? <img src={cover} alt="Album-cover" /> : null}
        </div>
        <div className="slider">
          {/* PROGRESS BAR */}
          <span className="slider-span">
            {Math.floor(duration / 60).toLocaleString('it-IT', {
              minimumIntegerDigits: 2,
            })}
            :
            {Math.floor(duration % 60).toLocaleString('it-IT', {
              minimumIntegerDigits: 2,
            })}
          </span>
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
        <div className="song-title">
          {currentSong ? (
            currentSong
          ) : (
            <span>Seleziona una canzone da riprodurre</span>
          )}
        </div>
        {/*======================
                  AUDIO CONTROLS 
             ======================*/}
        <div className="control-panel">
          {/* SHUFFLE */}
          <div
            className={shuffleActive ? 'svg-container active' : 'svg-container'}
            id="shuffle"
            onClick={() => dispatch(shuffle())}
          >
            <ShuffleIcon />
          </div>

          {/* BACKWARD */}
          <div
            className="svg-container"
            id="backward"
            onClick={() => dispatch(previousSong(songs))}
          >
            <BackwardButton />
          </div>

          {/* PLAY/PAUSE */}
          <div
            className="svg-container"
            id="play"
            onClick={() => dispatch(handlePlay())}
          >
            {isPlaying ? <PauseIcon /> : <PlayButton />}
          </div>

          {/* FORWARD */}
          <div
            className="svg-container"
            id="forward"
            onClick={() => {
              dispatch(nextSong(songs));
            }}
          >
            <ForwardButton />
          </div>

          {/* REPEAT */}
          <div
            className={repeatActive ? 'svg-container active' : 'svg-container'}
            id="repeat"
            onClick={() => dispatch(repeat())}
          >
            <RepeatIcon />
          </div>
        </div>
        {/*======================
                  AUTHOR/ALBUM 
             ======================*/}
        <div className="author-album">
          {currentSongAuthor ? currentSongAuthor : null}
        </div>
        {/*======================
                  VOLUME BUTTON 
             ======================*/}
        <div className=" lateral-mini-buttons" id="volume">
          <div className="volume-container">
            <VolumeSlider />
          </div>
        </div>{' '}
      </div>
    </div>
  );
};
export default Player;
