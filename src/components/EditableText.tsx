import {
  Box,
  BoxProps,
  InputBase,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import React, { FC, useState, useEffect, MouseEvent } from 'react';

type Props = {
  text: string;
} & BoxProps;

type CursorPosition =
  | {
      top: number;
      left: number;
    }
  | undefined;

export const EditableText: FC<Props> = ({ text, ...props }) => {
  const [cursorPosition, setCursorPosition] = useState<CursorPosition>();
  const [isEditMode, setEditMode] = useState(false);
  const [editableText, setEditableText] = useState(text);

  const onContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    const { clientX: left, clientY: top } = event;
    setCursorPosition(cursorPosition ? undefined : { top, left });
  };

  const handleClose = () => {
    setCursorPosition(undefined);
    setTimeout(() => setEditMode(true), 0);
  };

  useEffect(() => setEditableText(text), [text]);

  return (
    <Box onContextMenu={onContextMenu} {...props}>
      {isEditMode ? (
        <InputBase
          fullWidth
          autoFocus
          value={editableText}
          onChange={(e) => setEditableText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && setEditMode(false)}
          onBlur={() => setEditMode(false)}
        />
      ) : (
        <Typography onClick={() => setEditMode(true)}>
          {editableText}
        </Typography>
      )}

      <Menu
        open={!!cursorPosition}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={cursorPosition}
      >
        <MenuItem onClick={handleClose}>Edit</MenuItem>
      </Menu>
    </Box>
  );
};
