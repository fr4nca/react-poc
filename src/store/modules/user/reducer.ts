import produce from 'immer';

const initialState = {
  user: null,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCCESS':
      return produce(state, draft => {
        draft.user = action.payload.user;
      });
    default:
      return state;
  }
};
