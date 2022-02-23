import React, { FC, FormEvent, useState } from 'react';
import { Sphere } from '../types';
import { useIdb } from '../context/IdbContext';
import { CardStyles } from '../styles/Card';
import { InputBase } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { v1 as uuid } from 'uuid';
import { ColorPicker } from './ColorPicker';
import { StyledIconButton } from '../styles/IconButton';

type Props = {
  onSphereAdd: () => void;
};

const emptySphere = {
  id: '',
  name: '',
  color: '#ffffff',
};

export const NewSphere: FC<Props> = ({ onSphereAdd }) => {
  const db = useIdb();
  const [sphere, setSphere] = useState<Sphere>(emptySphere);

  const addSphereToDb = async (e: FormEvent) => {
    e.preventDefault();
    if (!sphere.name.trim()) return;
    setSphere(emptySphere);
    await db?.add('spheres', { ...sphere, id: uuid() });
    onSphereAdd();
  };

  return (
    <CardStyles>
      <form
        noValidate
        onSubmit={addSphereToDb}
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
      </form>
      <ColorPicker
        color={sphere.color}
        onColorChanged={(color) => setSphere((prev) => ({ ...prev, color }))}
      />
      <StyledIconButton onClick={addSphereToDb}>
        <AddIcon />
      </StyledIconButton>
    </CardStyles>
  );
};
