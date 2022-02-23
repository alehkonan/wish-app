import { IconButton, Tooltip, useMediaQuery } from '@mui/material';
import { deleteDB } from 'idb';
import React, { FC } from 'react';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { Theme } from '@mui/system';

export const DeleteDbButton: FC = () => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('tablet')
  );

  return (
    <Tooltip title="Очистить базу данных" placement="left">
      <IconButton
        size="large"
        sx={{
          position: 'fixed',
          bottom: isMobile ? 56 : 1,
          right: 1,
        }}
        onClick={() => deleteDB('wish-db')}
      >
        <DeleteRoundedIcon />
      </IconButton>
    </Tooltip>
  );
};
