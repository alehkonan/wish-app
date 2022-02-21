import { AppBar, Toolbar, Typography } from '@mui/material';
import React, { FC } from 'react';

export const Header: FC = () => {
  return (
    <AppBar position="sticky">
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit" component="div">
          Мои 100 желаний
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
