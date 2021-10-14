import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './Mainroutes';

// ===========================|| ROUTING RENDER ||=========================== //

export default function ThemeRoutes() {
  return useRoutes([...MainRoutes]);
}
