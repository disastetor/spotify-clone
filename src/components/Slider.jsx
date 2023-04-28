import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useDispatch, useSelector } from 'react-redux';
import { changeDuration } from '../features/player/playerSlice';

export default function ColorSlider() {
  let { duration } = useSelector((state) => state.player);
  const dispatch = useDispatch();
  return (
    <Box sx={{ width: 700 }}>
      <Slider
        size="small"
        aria-label="Temperature"
        defaultValue={0}
        min={0}
        max={180}
        value={duration}
        color="secondary"
        onChange={(e, val) => dispatch(changeDuration(val))}
      />
    </Box>
  );
}
