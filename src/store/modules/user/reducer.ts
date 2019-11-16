import produce from 'immer';

const initialState = {
  user: null,
};

export default (state = initialState, action: any) => {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.user = action.payload.user;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.user = null;
        break;
      }
      default:
    }
  });
};
