import { Box } from '@mui/material';
import { styled } from '@mui/system';
import React, { FC } from 'react';

type Props = {
  color: string;
  onColorChanged: (color: string) => void;
};

const StyledInput = styled('input')({
  cursor: 'pointer',
  width: '35px',
  height: '35px',
  backgroundColor: 'transparent',
  border: 'none',
  '&::-webkit-color-swatch': {
    borderRadius: '50%',
  },
  '&::-moz-color-swatch': {
    borderRadius: '50%',
  },
});

export const ColorPicker: FC<Props> = ({ color, onColorChanged }) => {
  return (
    <Box>
      <StyledInput
        type="color"
        value={color}
        onChange={(e) => onColorChanged(e.target.value)}
      />
    </Box>
  );
};
