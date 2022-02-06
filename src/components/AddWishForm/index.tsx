import React, { FC, MouseEvent, FormEvent, useEffect, useState } from 'react';
import { Sphere, Wish } from '../../types';
import {
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
  Paper,
  InputBase,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useIdb } from '../../context/IdbContext';

export const AddWishForm: FC = () => {
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
  const [wish, setWish] = useState<Wish>({
    text: '',
    sphere: null,
  });

  useEffect(() => {
    db?.getAll('spheres').then((value) => setSpheres(value));
  }, [db]);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await db?.add('wishes', wish);
    setWish({
      text: '',
      sphere: null,
    });
  };

  return (
    <Paper>
      <form
        noValidate
        onSubmit={onSubmit}
        style={{
          display: 'flex',
          gap: 1,
          alignItems: 'center',
          padding: '0 5px',
        }}
      >
        <Typography>{10}</Typography>
        <InputBase
          style={{ flex: 1 }}
          value={wish.text}
          placeholder="Добавте еще одно желание..."
          onChange={(e) =>
            setWish((prev) => ({ ...prev, text: e.target.value }))
          }
        />
        <Tooltip title={wish.sphere ? wish.sphere : 'Выберите сферу'}>
          <IconButton
            sx={{ bgcolor: selectedSphere?.color, border: '1px solid' }}
            size="large"
            disableRipple
            onClick={openMenu}
          />
        </Tooltip>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={closeMenu}
        >
          {spheres.map((sphere, index) => (
            <MenuItem
              key={index}
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
        <IconButton type="submit">
          <AddIcon />
        </IconButton>
      </form>
    </Paper>
  );
};
