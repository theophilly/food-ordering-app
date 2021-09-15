import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import './App.css';

import theme from './theme';
import Home from './pages/Home';
import Allfoods from './pages/Allfoods';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Allfoods}></Route>
          <Route path="/about" exact component={Home}></Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
