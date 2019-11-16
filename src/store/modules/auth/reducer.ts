import produce from 'immer';

const initialState = {
  token: null,
  isAuthenticated: false,
  loading: false,
};

export default (state = initialState, action: any) => {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.token = action.payload.token;
        draft.isAuthenticated = true;
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.token = null;
        draft.isAuthenticated = false;
        break;
      }
      default:
    }
  });
};
