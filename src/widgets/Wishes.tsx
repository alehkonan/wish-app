import { Box, IconButton, Tooltip } from '@mui/material';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { NewWish } from '../components/NewWish';
import { WishCard } from '../components/WishCard';
import { useIdb } from '../context/IdbContext';
import { Title } from '../styles/Title';
import { Wish } from '../types';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

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
          <WishCard
            key={wish.id}
            number={index + 1}
            wish={wish}
            onWishChanged={getWishes}
          />
        ))}
        <NewWish onWishAdded={getWishes} />
      </Box>
      <Tooltip title="Очистить базу данных" placement="left">
        <IconButton
          size="large"
          sx={{
            position: 'fixed',
            bottom: 1,
            right: 1,
          }}
        >
          <DeleteRoundedIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};
