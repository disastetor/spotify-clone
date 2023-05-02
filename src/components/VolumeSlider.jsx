import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';

export default function VolumeSlider() {
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 0.7 }}>
      <Stack spacing={1} direction="row" sx={{ mb: 1 }} alignItems="center">
        <VolumeDown />
        <Slider
          aria-label="Volume"
          value={value}
          onChange={handleChange}
          color="secondary"
          size="small"
        />
      </Stack>
    </Box>
  );
}
