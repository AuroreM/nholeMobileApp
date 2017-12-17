// @flow

export default function(state = { token: '' }, action) {
  switch (action.type) {
    default:
      break;
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.payload.token,
      };
  }
  return state;
}
