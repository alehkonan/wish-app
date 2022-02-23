import { IconButton } from '@mui/material';
import React, { FC } from 'react';
import { useIdb } from '../context/IdbContext';
import { CardStyles } from '../styles/CardStyles';
import { Sphere } from '../types';
import { EditableText } from './EditableText';
import RemoveIcon from '@mui/icons-material/Remove';
import { ColorPicker } from './ColorPicker';

type Props = {
  sphere: Sphere;
  onSphereChange: () => void;
};

export const SphereCard: FC<Props> = ({ sphere, onSphereChange }) => {
  const idb = useIdb();

  const updateSphere = async (updatedSphere: Partial<Sphere>) => {
    await idb?.put('spheres', { ...sphere, ...updatedSphere });
    onSphereChange();
  };

  const deleteSphere = async () => {
    await idb?.delete('spheres', sphere.id);
    onSphereChange();
  };
  return (
    <CardStyles>
      <EditableText
        sx={{ flex: 1, cursor: 'text' }}
        text={sphere.name}
        onTextUpdate={(name) => updateSphere({ name })}
      />
      <ColorPicker
        color={sphere.color}
        onColorChanged={(color) => updateSphere({ color })}
      />
      <IconButton onClick={deleteSphere}>
        <RemoveIcon />
      </IconButton>
    </CardStyles>
  );
};
