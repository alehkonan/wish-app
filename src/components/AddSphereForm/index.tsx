import React, { FC, FormEvent, useState } from 'react';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { Sphere } from '../../types';
import { useIdb } from '../../context/IdbContext';

export const AddSphereForm: FC = () => {
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
    <form
      noValidate
      onSubmit={onSubmit}
      style={{
        display: 'grid',
      }}
    >
      <TextField
        label="Сфера"
        variant="outlined"
        value={sphere.name}
        onChange={(e) =>
          setSphere((prev) => ({ ...prev, name: e.target.value }))
        }
      />
      <Input
        type="color"
        value={sphere.color}
        onChange={(e) =>
          setSphere((prev) => ({ ...prev, color: e.target.value }))
        }
      />
      <Button type="submit" variant="outlined">
        Создать
      </Button>
    </form>
  );
};
