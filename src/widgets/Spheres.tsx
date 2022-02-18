import { Box } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import { NewSphere } from '../components/NewSphere';
import { SphereCard } from '../components/SphereCard';
import { useIdb } from '../context/IdbContext';
import { Title } from '../styles/Title';
import { Sphere } from '../types';

export const Spheres: FC = () => {
  const idb = useIdb();
  const [spheres, setSpheres] = useState<Sphere[]>([]);

  useEffect(() => {
    idb?.getAll('spheres').then((value) => setSpheres(value));
  }, [idb]);

  return (
    <Box>
      <Title variant="h5">Сферы</Title>
      <Box display="grid">
        {spheres.map((sphere, index) => (
          <SphereCard key={index} sphere={sphere} />
        ))}
        <NewSphere />
      </Box>
    </Box>
  );
};
