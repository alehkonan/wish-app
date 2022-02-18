import { Input, Typography } from '@mui/material';
import React, { FC } from 'react';
import { CardStyles } from '../styles/CardStyles';
import { Sphere } from '../types';

type Props = {
  sphere: Sphere;
};

export const SphereCard: FC<Props> = ({ sphere }) => {
  return (
    <CardStyles>
      <Typography sx={{ flex: 1 }}>{sphere.name}</Typography>
      <Input type="color" defaultValue={sphere.color} />
    </CardStyles>
  );
};
