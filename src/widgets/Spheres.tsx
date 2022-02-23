import { Box } from '@mui/material';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { NewSphere } from '../components/NewSphere';
import { SphereCard } from '../components/SphereCard';
import { useIdb } from '../context/IdbContext';
import { Title } from '../styles/Title';
import { Sphere } from '../types';

export const SpheresWidget: FC = () => {
  const idb = useIdb();
  const [spheres, setSpheres] = useState<Sphere[]>([]);

  const getSpheres = useCallback(async () => {
    if (!idb) return;
    const result = await idb?.getAll('spheres');
    setSpheres(result);
  }, [idb]);

  useEffect(() => {
    getSpheres();
  }, [getSpheres]);

  return (
    <Box>
      <Title variant="h5">Сферы</Title>
      <Box display="grid">
        {spheres.map((sphere) => (
          <SphereCard
            key={sphere.id}
            sphere={sphere}
            onSphereChange={getSpheres}
          />
        ))}
        <NewSphere onSphereAdd={getSpheres} />
      </Box>
    </Box>
  );
};
