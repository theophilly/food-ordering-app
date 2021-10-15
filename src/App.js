import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import './App.css';

import theme from './theme';
import ScrollToTop from './components/reusables/ScrollToTop';
import Navbar from './components/reusables/Navbar';

import Routes from './routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ScrollToTop />
      <Navbar />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
