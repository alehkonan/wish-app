import { Button, ButtonGroup } from '@mui/material';
import React, { FC } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import { Endpoint, endpoints } from '../utils/endpoints';

export const Navigation: FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <ButtonGroup orientation="vertical" variant="contained">
      {endpoints.map(({ endpoint, label }) => {
        if (endpoint === Endpoint.Spheres) return null;
        return (
          <Button
            key={endpoint}
            sx={{ width: '200px' }}
            onClick={() => navigate(endpoint)}
            variant={pathname === endpoint ? 'outlined' : 'contained'}
          >
            {label}
          </Button>
        );
      })}
    </ButtonGroup>
  );
};
