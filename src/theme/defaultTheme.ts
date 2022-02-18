import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    // xl: false;
    mobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

export const defaultTheme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
      xl: 1600,
    },
  },
  palette: {
    primary: {
      main: '#416a59',
      light: '#548a73',
      dark: '#2d4a3e',
    },
    secondary: {
      main: '#73a24e',
      light: '#89c25d',
      dark: '#577a3b',
    },
    info: {
      main: '#a9c25d',
      light: '#c0d968',
      dark: '#91a34e',
    },
    background: {
      default: '#f5eec2',
      paper: '#f5eec2',
    },
    action: {
      selected: '#a9c25d',
    },
  },
  spacing: 5, // 8px is default
  typography: {
    htmlFontSize: 16, // 16px is default
    fontSize: 14, // default is 14px
    fontFamily: `'Nunito', 'Segoe UI', 'Roboto', sans-serif`,
    button: {
      fontSize: '1rem',
      textTransform: 'inherit',
    },
  },
});
