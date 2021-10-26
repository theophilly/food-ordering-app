// import * as actionType from '../actionTypes/postActionTypes';

// const intialState = {
//   posts: [],
//   loading: false,
//   error: '',
//   message: '',
//   mailSent: false,
// };
// export default function postReducer(state = intialState, action) {
//   if (action.type === actionType.FETCH_BEGIN) {
//     return { ...state, loading: true };
//   } else if (action.type === actionType.ON_FETCH_ERROR) {
//     return { ...state, error: action.payload.error, loading: false };
//   } else if (action.type === actionType.ON_FETCH_SUCCESS) {
//     return { ...state, posts: action.payload.posts, loading: false };
//   } else if (action.type === actionType.MAIL_ERROR) {
//     return { ...state, message: action.payload.error, mailSent: false };
//   } else if (action.type === actionType.MAIL_SUCCESS) {
//     return {
//       ...state,
//       message: action.payload.successMessage,
//       mailSent: true,
//     };
//   } else {
//   }

//   return state;
// }
