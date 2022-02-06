import { Box, Divider, Typography } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import { AddSphereForm } from '../../components/AddSphereForm';
import { AddWishForm } from '../../components/AddWishForm';
import { WishCard } from '../../components/WishCard';
import { useIdb } from '../../context/IdbContext';
import { Wish } from '../../types';

export const Main: FC = () => {
  const db = useIdb();

  const [wishes, setWishes] = useState<Wish[]>([]);

  useEffect(() => {
    db?.getAll('wishes').then((value) => setWishes(value));
  }, [db]);

  return (
    <Box>
      <Typography>Wishes</Typography>
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(auto, 500px))"
        gap={1}
      >
        {wishes.map((wish, index) => (
          <WishCard key={index} number={index + 1} wish={wish} />
        ))}
        <Divider />
        <AddWishForm />
      </Box>
    </Box>
  );
};
