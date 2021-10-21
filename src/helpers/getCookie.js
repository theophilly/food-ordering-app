import jwt_decode from 'jwt-decode';
import { store } from '../store';

export default function getCookie(token) {
  if (!token || token === '') {
    return undefined;
  }

  const decodeToken = jwt_decode(token);
  const expiresIn = new Date(decodeToken.exp * 1000);

  if (new Date() > expiresIn) {
    return undefined;
  } else {
    return token;
  }
}
