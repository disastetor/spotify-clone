import { useState } from 'react';
import Slider from './Slider';
import { useDispatch } from 'react-redux';
import { test } from '../features/player/playerSlice';

//Styles
import './Player.css';
import {
  EmptyHeart,
  VolumeActive,
  ShuffleIcon,
  PlayButton,
  BackwardButton,
  ForwardButton,
  RepeatIcon,
  FilledHeart,
} from '../assets/icons';

const Player = () => {
  const [isFavourite, setIsFavourite] = useState(false);

  const dispatch = useDispatch();

  const isliked = (e) => {
    e.preventDefault();
    setIsFavourite(!isFavourite);
    dispatch(test());
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
        <div onClick={(e) => isliked(e)} className="lateral-mini-buttons">
          {isFavourite ? <FilledHeart /> : <EmptyHeart />}
        </div>
        {/*======================
                  SONG TITLE 
             ======================*/}
        <div className="song-title">can't hold us now</div>
        {/*======================
                  AUDIO CONTROLS 
             ======================*/}
        <div className="control-panel">
          <ShuffleIcon />
          <BackwardButton />
          <PlayButton />
          <ForwardButton />
          <RepeatIcon />
        </div>
        {/*======================
                  AUTHOR/ALBUM 
             ======================*/}
        <div className="author-album">Ji ai Jo, Blockbuster</div>
        {/*======================
                  VOLUME BUTTON 
             ======================*/}
        <div className=" lateral-mini-buttons">
          <VolumeActive />
        </div>{' '}
      </div>
    </div>
  );
};
export default Player;
