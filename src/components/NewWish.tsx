import React, { FC, FormEvent, useState } from 'react';
import { Sphere, Wish } from '../types';
import { InputBase } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useIdb } from '../context/IdbContext';
import { CardStyles } from '../styles/Card';
import { v1 as uuid } from 'uuid';
import { SphereMenu } from './SphereMenu';
import { StyledIconButton } from '../styles/IconButton';

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
  const [wish, setWish] = useState<Wish>(emptyWish);

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
      <SphereMenu
        sphere={wish.sphere}
        onSphereChanged={(sphere: Sphere) =>
          setWish((prev) => ({ ...prev, sphere }))
        }
      />
      <StyledIconButton size="medium" onClick={addWishToDb}>
        <AddIcon />
      </StyledIconButton>
    </CardStyles>
  );
};
