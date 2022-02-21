import { IconButton, Menu, MenuItem, Tooltip } from '@mui/material';
import React, { FC, useState, MouseEvent, useEffect } from 'react';
import { useIdb } from '../context/IdbContext';
import { Sphere } from '../types';

type Props = {
  sphere: Sphere | null;
};

export const SphereMenu: FC<Props> = ({ sphere }) => {
  const db = useIdb();
  const [spheres, setSpheres] = useState<Sphere[]>([]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedSphere, setSelectedSphere] = useState<Sphere | undefined>();
  const open = Boolean(anchorEl);
  const openMenu = (e: MouseEvent<HTMLElement>) => setAnchorEl(e.currentTarget);
  const closeMenu = () => setAnchorEl(null);
  const selectSphere = (sphere: Sphere) => {
    setSelectedSphere(sphere);
    setAnchorEl(null);
  };

  useEffect(() => {
    db?.getAll('spheres').then((value) => setSpheres(value));
  }, [db]);

  return (
    <>
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
            key={sphere.name}
            // selected={selectedSphere?.id === sphere.id}
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
    </>
  );
};
