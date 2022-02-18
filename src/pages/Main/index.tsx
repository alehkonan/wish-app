import { Box, Button } from '@mui/material';
import React, { FC } from 'react';
import { Spheres } from '../../widgets/Spheres';
import { Wishes } from '../../widgets/Wishes';

export const Main: FC = () => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          mobile: '1fr',
          tablet: 'minmax(300px, 1fr) 300px',
        },
        gap: 5,
        padding: 1,
      }}
    >
      <Wishes />
      <Spheres />
      <Button variant="contained">Button</Button>
    </Box>
  );
};
