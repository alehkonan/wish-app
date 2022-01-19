import {
  Card,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from '@mui/material';
import React, { FC, MouseEvent, useState } from 'react';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { spheres } from '../../data/spheres';
import { Sphere, Wish } from '../../types';

type Props = {
  number: number;
  wish: Wish;
};
export const WishCard: FC<Props> = ({ number, wish }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedSphere, setSelectedSphere] = useState<Sphere | undefined>();
  const open = Boolean(anchorEl);
  const openMenu = (e: MouseEvent<HTMLElement>) => setAnchorEl(e.currentTarget);
  const closeMenu = () => setAnchorEl(null);
  const selectSphere = (sphere: Sphere) => {
    setSelectedSphere(sphere);
    setAnchorEl(null);
  };

  return (
    <Card
      key={wish.id}
      sx={{ display: 'flex', gap: 1, alignItems: 'center', padding: '0 5px' }}
    >
      <Typography>{number}</Typography>
      <Typography sx={{ flex: 1 }}>{wish.text}</Typography>
      <Tooltip title={selectedSphere ? selectedSphere.name : 'Выберите сферу'}>
        <IconButton
          sx={{ bgcolor: selectedSphere?.color, border: '1px solid' }}
          size="large"
          disableRipple
          onClick={openMenu}
        />
      </Tooltip>
      <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={closeMenu}>
        {spheres.map((sphere) => (
          <MenuItem
            key={sphere.id}
            selected={selectedSphere?.id === sphere.id}
            onClick={() => selectSphere(sphere)}
          >
            <IconButton
              sx={{ bgcolor: sphere.color, mr: '5px' }}
              size="medium"
              disableRipple
            />
            {sphere.name}
          </MenuItem>
        ))}
      </Menu>
      <IconButton>
        <EditRoundedIcon />
      </IconButton>
      <IconButton>
        <DeleteRoundedIcon />
      </IconButton>
    </Card>
  );
};
