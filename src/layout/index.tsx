import React, { FC } from 'react';
import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';
import { BoxProps, Theme, useMediaQuery } from '@mui/material';
import { Header } from './Header';
import { Navigation } from './Navigation';
import { styled } from '@mui/system';
import { MobileNavigation } from './MobileNavigation';

const LayoutStyles = styled(Box)<BoxProps>(({ theme }) => {
  const laptop = theme.breakpoints.up('laptop');
  return {
    minHeight: '100vh',
    display: 'grid',
    gap: theme.spacing(1),
    gridTemplateRows: 'auto 1fr',
    [laptop]: {
      gridTemplateColumns: '1fr auto',
      '& header': { gridArea: 'header' },
      gridTemplateAreas: `'header header'`,
    },
  };
});

export const Layout: FC = () => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('laptop')
  );

  return (
    <LayoutStyles>
      <Header />
      <Outlet />
      {isMobile ? <MobileNavigation /> : <Navigation />}
    </LayoutStyles>
  );
};
