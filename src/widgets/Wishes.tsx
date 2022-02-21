import { Box } from '@mui/material';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { NewWish } from '../components/NewWish';
import { WishCard } from '../components/WishCard';
import { useIdb } from '../context/IdbContext';
import { Title } from '../styles/Title';
import { Wish } from '../types';

export const WishesWidget: FC = () => {
  const idb = useIdb();
  const [wishes, setWishes] = useState<Wish[]>([]);

  const getWishes = useCallback(async () => {
    if (!idb) return;
    const result = await idb.getAll('wishes');
    setWishes(result);
  }, [idb]);

  useEffect(() => {
    getWishes();
  }, [getWishes]);

  return (
    <Box>
      <Title variant="h5">Желания</Title>
      <Box display="grid">
        {wishes.map((wish, index) => (
          <WishCard key={index} number={index + 1} wish={wish} />
        ))}
        <NewWish onWishAdded={getWishes} />
      </Box>
    </Box>
  );
};
