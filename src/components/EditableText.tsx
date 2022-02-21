import {
  Box,
  BoxProps,
  InputBase,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import React, { FC, useState, TouchEvent, useEffect, useRef } from 'react';

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
  const timeoutRef = useRef<NodeJS.Timeout>();

  const onTouchStart = (event: TouchEvent) => {
    timeoutRef.current = setTimeout(() => {
      console.log('timeout done');
    }, 1000);
    event.cancelable && event.preventDefault();
    const touch = event.touches[0];
    const { clientX: left, clientY: top } = touch;
    setCursorPosition(cursorPosition ? undefined : { top, left });
  };

  const onTouchEnd = (evant: TouchEvent) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handleClose = () => setCursorPosition(undefined);

  useEffect(() => setEditableText(text), [text]);

  return (
    <Box
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onContextMenu={() => console.log('this is context menu')}
      {...props}
    >
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
        <Typography
          onClick={() => {
            setEditMode(true);
          }}
        >
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
