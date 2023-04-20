import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°C`;
}

export default function ColorSlider() {
  return (
    <Box sx={{ width: 700 }}>
      <Slider
        size="small"
        aria-label="Temperature"
        defaultValue={0}
        min={0}
        max={180}
        getAriaValueText={valuetext}
        color="secondary"
      />
    </Box>
  );
}
