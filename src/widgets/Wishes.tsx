import { Box } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import { NewWish } from '../components/NewWish';
import { WishCard } from '../components/WishCard';
import { useIdb } from '../context/IdbContext';
import { Title } from '../styles/Title';
import { Wish } from '../types';

export const Wishes: FC = () => {
  const idb = useIdb();
  const [wishes, setWishes] = useState<Wish[]>([]);

  useEffect(() => {
    idb?.getAll('wishes').then((value) => setWishes(value));
  }, [idb]);

  return (
    <Box>
      <Title variant="h5">Желания</Title>
      <Box display="grid">
        {wishes.map((wish, index) => (
          <WishCard key={index} number={index + 1} wish={wish} />
        ))}
        <NewWish />
      </Box>
    </Box>
  );
};
