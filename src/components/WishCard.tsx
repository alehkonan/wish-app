import { IconButton, Typography } from '@mui/material';
import React, { FC } from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import { Wish } from '../types';
import { CardStyles } from '../styles/CardStyles';
import { SphereMenu } from './SphereMenu';
import { EditableText } from './EditableText';

type Props = {
  number: number;
  wish: Wish;
};

export const WishCard: FC<Props> = ({ number, wish }) => {
  return (
    <CardStyles>
      <Typography>{number}.</Typography>
      <EditableText sx={{ flex: 1, cursor: 'pointer' }} text={wish.text} />
      <SphereMenu sphere={wish.sphere} />
      <IconButton>
        <RemoveIcon />
      </IconButton>
    </CardStyles>
  );
};
