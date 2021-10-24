import { createTheme } from '@material-ui/core/styles';
import { themeTypography } from './typography';

export default createTheme({
  palette: {
    primary: {
      main: '#fcc82b',
      light: '#e3f2fd',
      dark: '#1e88e5',
    },
    secondary: {
      main: '#2b5ffc',
      light: '#ede7f6',
      dark: '#2b5ffc',
    },
    error: {
      light: '#fbe9e7',
      main: '#f44336',
      dark: '#c62828',
    },
    orange: {
      light: '#fbe9e7',
      main: '#ffab91',
      dark: '#d84315',
    },
    warning: {
      light: '#fff8e1',
      main: '#ffe57f',
      dark: '#ffc107',
    },
    success: {
      light: '#b9f6ca',
      200: '#69f0ae',
      main: '#00e676',
      dark: '#00c853',
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      500: '#9e9e9e',
    },
    lightdark1: '#333333',
    lightdark2: '#666666',
    lightdark3: '#444444',
    green: '#4ca146',
  },
  typography: themeTypography(),
});
