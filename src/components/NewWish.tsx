import React, { FC, MouseEvent, FormEvent, useEffect, useState } from 'react';
import { Sphere, Wish } from '../types';
import { IconButton, Menu, MenuItem, Tooltip, InputBase } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useIdb } from '../context/IdbContext';
import { CardStyles } from '../styles/CardStyles';
import { v1 as uuid } from 'uuid';

type Props = {
  onWishAdded: () => void;
};

const emptyWish: Wish = {
  id: '',
  text: '',
  sphere: null,
};

export const NewWish: FC<Props> = ({ onWishAdded }) => {
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
  const [wish, setWish] = useState<Wish>(emptyWish);

  useEffect(() => {
    db?.getAll('spheres').then((value) => setSpheres(value));
  }, [db]);

  const addWishToDb = async (e: FormEvent) => {
    e.preventDefault();
    if (!wish.text.trim()) return;
    await db?.add('wishes', { ...wish, id: uuid() });
    setWish(emptyWish);
    onWishAdded();
  };

  return (
    <CardStyles>
      <form
        noValidate
        onSubmit={addWishToDb}
        style={{
          display: 'flex',
          width: '100%',
        }}
      >
        <InputBase
          style={{ flex: 1 }}
          value={wish.text}
          placeholder="Добавте еще одно желание..."
          onChange={(e) =>
            setWish((prev) => ({ ...prev, text: e.target.value }))
          }
        />
      </form>
      <Tooltip title={wish.sphere ? wish.sphere : 'Выберите сферу'}>
        <IconButton
          sx={{ bgcolor: selectedSphere?.color, border: '1px solid' }}
          size="large"
          disableRipple
          onClick={openMenu}
        />
      </Tooltip>
      <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={closeMenu}>
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
      <IconButton onClick={addWishToDb}>
        <AddIcon />
      </IconButton>
    </CardStyles>
  );
};
