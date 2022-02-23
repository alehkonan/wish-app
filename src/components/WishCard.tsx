import { IconButton, Typography } from '@mui/material';
import React, { FC } from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import { Wish } from '../types';
import { CardStyles } from '../styles/CardStyles';
import { SphereMenu } from './SphereMenu';
import { EditableText } from './EditableText';
import { useIdb } from '../context/IdbContext';

type Props = {
  number: number;
  wish: Wish;
  onWishChanged: () => void;
};

export const WishCard: FC<Props> = ({ number, wish, onWishChanged }) => {
  const idb = useIdb();

  const updateWish = async (text?: string) => {
    if (text) {
      await idb?.put('wishes', { ...wish, text });
      onWishChanged();
    }
  };

  const deleteWish = async () => {
    await idb?.delete('wishes', wish.id);
    onWishChanged();
  };

  return (
    <CardStyles>
      <Typography>{number}.</Typography>
      <EditableText
        sx={{ flex: 1, cursor: 'text' }}
        text={wish.text}
        onTextUpdate={updateWish}
      />
      <SphereMenu sphere={wish.sphere} />
      <IconButton onClick={deleteWish}>
        <RemoveIcon />
      </IconButton>
    </CardStyles>
  );
};
