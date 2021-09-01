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
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" exact component={Allfoods}></Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
