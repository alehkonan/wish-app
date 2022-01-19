import { Box, Typography } from '@mui/material';
import React, { FC } from 'react';
import { WishCard } from '../../components/WishCard';
import { wishes } from '../../data/wishes';

export const Main: FC = () => {
  return (
    <Box>
      <Typography>Wishes</Typography>
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(auto, 500px))"
        gap={1}
      >
        {wishes.map((wish, index) => (
          <WishCard key={wish.id} number={index + 1} wish={wish} />
        ))}
      </Box>
    </Box>
  );
};
