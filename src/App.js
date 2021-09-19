import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import './App.css';

import theme from './theme';
import Home from './pages/Home';
import Allfoods from './pages/Allfoods';
import ScrollToTop from './components/reusables/ScrollToTop';
import Navbar from './components/reusables/Navbar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/allmeals" exact component={Allfoods}></Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
