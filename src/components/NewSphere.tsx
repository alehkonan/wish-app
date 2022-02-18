import React, { FC, FormEvent, useState } from 'react';
import { Sphere } from '../types';
import { useIdb } from '../context/IdbContext';
import { CardStyles } from '../styles/CardStyles';
import { IconButton, InputBase } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export const NewSphere: FC = () => {
  const db = useIdb();
  const [sphere, setSphere] = useState<Omit<Sphere, 'id'>>({
    name: '',
    color: '',
  });

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await db?.add('spheres', sphere);
  };

  return (
    <CardStyles>
      <form
        noValidate
        onSubmit={onSubmit}
        style={{
          display: 'flex',
          width: '100%',
        }}
      >
        <InputBase
          style={{ flex: 1 }}
          value={sphere.name}
          placeholder="Добавте сферу..."
          onChange={(e) =>
            setSphere((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <IconButton type="submit">
          <AddIcon />
        </IconButton>
      </form>
    </CardStyles>
  );
};
