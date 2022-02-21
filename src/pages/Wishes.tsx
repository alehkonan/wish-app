import { Box, Theme, useMediaQuery } from '@mui/material';
import React, { FC } from 'react';
import { SpheresWidget } from '../widgets/Spheres';
import { WishesWidget } from '../widgets/Wishes';

export const WishesPage: FC = () => {
  const isLaptop = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up('laptop')
  );
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          laptop: 'minmax(300px, 1fr) 300px',
        },
        gap: 2,
      }}
    >
      <WishesWidget />
      {isLaptop && <SpheresWidget />}
    </Box>
  );
};
