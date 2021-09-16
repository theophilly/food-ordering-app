import { createTheme } from '@material-ui/core/styles';
import { themeTypography } from './typography';

export default createTheme({
  palette: {
    primary: {
      main: '#fcc82b',
    },
    secondary: {
      main: '#2b5ffc',
    },
    lightdark1: '#333333',
    lightdark2: '#666666',
    lightdark3: '#444444',
    green: '#4ca146',
  },
  typography: themeTypography(),
});
