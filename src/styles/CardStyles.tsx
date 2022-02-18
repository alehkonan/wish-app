import { Card as InitialCard, CardProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CardStyles = styled(InitialCard)<CardProps>(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  alignItems: 'center',
  padding: '0 5px',
}));
