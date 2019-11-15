import produce from 'immer';

const initialState = {
  token: null,
  isAuthenticated: false,
  loading: false,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCCESS':
      return produce(state, draft => {
        draft.token = action.payload.token;
        draft.isAuthenticated = true;
      });
    default:
      return state;
  }
};
