const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        uid: action.uid,
      };
    case 'LOGOUT':
      return defaultState;
    default:
      return state;
  }
};
