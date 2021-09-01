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
  },
  typography: themeTypography(),
});
