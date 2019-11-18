const DEFAULT_AUTH_STATE = {
  isAuthed: false,
  hasCheckedForAuth: false,
  loading: false,
  user: null
};

export default (state = DEFAULT_AUTH_STATE, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
        isAuthed: true,
        hasCheckedForAuth: true
      };
    case "LOGOUT":
      return {
        ...DEFAULT_AUTH_STATE,
        hasCheckedForAuth: true
      };
    default:
      return state;
  }
};
