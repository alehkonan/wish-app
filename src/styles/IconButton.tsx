import { IconButton, IconButtonProps } from '@mui/material';
import { styled } from '@mui/system';

export const StyledIconButton = styled(IconButton)<IconButtonProps>(
  ({ theme }) => {
    const mobile = theme.breakpoints.only('mobile');
    const tablet = theme.breakpoints.down('laptop');
    return {
      [mobile]: {
        width: '50px',
        height: '50px',
      },
      [tablet]: {
        boxShadow:
          '1px 1px 3px black, 1px -1px 3px black, -1px 1px 3px black, -1px -1px 3px black',
        margin: '3px',
      },
    };
  }
);
