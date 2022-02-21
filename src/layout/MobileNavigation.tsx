import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import React, { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { endpoints } from '../utils/endpoints';

export const MobileNavigation: FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <Paper
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        value={pathname}
        onChange={(evant, value) => navigate(value)}
      >
        {endpoints.map(({ endpoint, label, icon }) => (
          <BottomNavigationAction
            key={endpoint}
            label={label}
            icon={icon}
            value={endpoint}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
};
