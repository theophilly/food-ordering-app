import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import './App.css';

import theme from './theme';
import Home from './pages/Home';
import Allfoods from './pages/Allfoods';
import ScrollToTop from './components/reusables/ScrollToTop';
import Navbar from './components/reusables/Navbar';
import Checkout from './pages/Checkout';
import Login from './pages/Login';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/allmeals" exact component={Allfoods}></Route>
          <Route path="/checkout" exact component={Checkout}></Route>
          <Route path="/login" exact component={Login}></Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
