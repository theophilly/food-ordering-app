import jwt_decode from 'jwt-decode';
import { store } from '../store';

export default function getCookie() {
  const token = localStorage.getItem('token');
  if (!token) {
    return undefined;
  }

  const decodeToken = jwt_decode(token);
  const expiresIn = new Date(decodeToken.exp * 1000);

  if (new Date() > expiresIn) {
    localStorage.clear();

    store.dispatch({ type: 'SESSION_EXPIRED' });

    return undefined;
  } else {
    return token;
  }
}
