import { useRoutes } from 'react-router-dom';
import { useSelector } from 'react-redux';

// routes
import MainRoutes from './Mainroutes';

// ===========================|| ROUTING RENDER ||=========================== //

export default function ThemeRoutes() {
  const authed = useSelector((state) => state.authReducer.authenticated);

  return useRoutes(MainRoutes(authed));
}
